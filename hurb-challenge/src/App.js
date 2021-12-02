import React, { useEffect, useState } from 'react';
import axios from 'axios';

import WeatherFieldLocation from './components/WeatherFieldLocation';
import WeatherInfo from './components/WeatherInfo';
import Loading from './components/Loading';

function App() {
  const [wallpaper, setWallpaper] = useState('')
  const [geolocation, setGeolocation] = useState(false)
  const [geoInfo, setGeoInfo] = useState({})
  const [location, setLocation] = useState('')
  const [weather, setWeather] = useState()
  const [fullLocation, setFullLocation] = useState()

  // Updating the wallpaper
  useEffect(() => {
    setWallpaper('https://www.bing.com/th?id=OHR.RainbowMountain_ROW1744297553_1920x1080.jpg&rf=LaDigue_1920x1080.jpg')
  }, [wallpaper])

  // Get the geolocation from the navigator
  useEffect(()=> {
    navigator.geolocation.getCurrentPosition((position)=> {
      getWeather(position.coords.latitude, position.coords.longitude);
      getAddress(position.coords.latitude, position.coords.longitude);
      setGeolocation(true)
    })
  }, [])

  // Get the info from the geolocation
  let getWeather = async (lat, long) => {
    let res = await axios.get('https://api.openweathermap.org/data/2.5/onecall', {
      params: {
        lat: lat,
        lon: long,
        exclude: 'hourly,minutely',
        appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
        lang: 'pt_br',
        units: 'metric'
      }
    });
    setWeather(res.data);
  }

  // Get the full info from the location
  let getAddress = async (lat, long) => {
    let res = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
      params: {
        q: lat + ',' + long,
        key: process.env.REACT_APP_OPEN_CAGE_DATA_KEY,
        language: 'pt_br'
      }
    });
    setFullLocation(res.data.results);
  }

  // Updating input according with the geolocation
  useEffect(() => {
    if (!geolocation) {
      setLocation('Buscando localização...')
    }

    setLocation('Florianópolis, Santa Catarina')
  }, [fullLocation])

  // Get location from weather field box
  let handleChange = (event) => {
    const { value } = event.target
    setLocation(value)
  }

  return (
    <div className="weatherWallpaper" style={{ backgroundImage: `url(${wallpaper})` }}>
      <div className="weatherApp">
        <WeatherFieldLocation
          location={location}
          handleChange={(e) => handleChange(e)}
        />

        { !weather ? <Loading /> : <WeatherInfo weather={weather} /> }
      </div>
    </div>
  )
}

export default App;