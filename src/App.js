import React, { useEffect, useState } from 'react';
import opencage from './services/opencage';
import openweather from './services/openweather';
import bing from './services/backgroundImage';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';

import './App.css';

function App() {
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bg, setBg] = useState(null);
  const [err, setError] = useState(null);

  async function bingBackground(){
    const response = await bing.get();
    setBg(`https://www.bing.com${response.data.images[0].url}`);
  }

  const handleChange = (address) => {
    setAddress(address);
  }

  async function handleSelect(value) {
    try {
      const results = await geocodeByAddress(value);
      const latlng = await getLatLng(results[0]);
      setAddress(value);
      setCoordinates(latlng);
      setLoading(true);

      const { data } = await openweather.get('forecast', {
        params: {
          q: value,
          appid: process.env.REACT_APP_OPENWEATHER_KEY,
          lang: 'pt_br',
          units: 'metric',
        }
      });
      setWeather(data);
      setLoading(false);
      setError(null);

    } catch (error) {
      setLoading(true);
      setError('Não foi possível mostrar dados da localização');
    }
  }

  async function getCoordsAndWeather(lat, lng) {
    const coords = await opencage.get('json', {
      params: {
        q: `${lat}, ${lng}`,
        key: process.env.REACT_APP_OPENCAGE_KEY,
      },
    });

    const responseCoords = coords.data.results[0].components.city;
    setAddress(responseCoords);

    const { data } = await openweather.get('forecast', {
      params: {
        q: responseCoords,
        appid: process.env.REACT_APP_OPENWEATHER_KEY,
        lang: 'pt_br',
        units: 'metric',
      },
    });
    setWeather(data);
  }

  useEffect(() => {
    if('geolocation' in navigator) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition((position) => {
        getCoordsAndWeather(position.coords.latitude, position.coords.longitude);
        setCoordinates({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLoading(false);
      });
    }
    bingBackground();
  }, []);

  return (
    <div className="wrapper" style={{ backgroundImage: `url(${bg})` }}>
      <header>
        <div className="content">
          <i className="icon" data-icon="("></i>
          <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
          >

            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div className="input_box">
                <input {...getInputProps({
                  placeholder: 'Digite sua cidade...',
                  className: 'address_input_search',
                })} />
                <div className="box_select">
                  {loading ? <div className="loading">...carregando dados</div> : null}
                  {suggestions.map((suggestion) => {
                    const className = suggestion.active
                      ? 'suggestion-item--active'
                      : 'suggestion-item';
                    
                    const style = suggestion.active
                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                      : { backgroundColor: '#f3eeeb', cursor: 'pointer' };
                    
                    return (
                      <div {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                      >
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>
      </header>

      <main>
        
      </main>

    </div>
  );
}

export default App;
