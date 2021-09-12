import React, { useState, useEffect } from 'react';
import BackgroundCover from '../src/components/BackgroundCover';
import BigBox from '../src/components/BigBox';
import Box from '../src/components/Box';
import BoxInfo from '../src/components/BoxInfo';
import Column from '../src/components/Column';
import FakeBody from '../src/components/FakeBody';
import GenericBoxInfo from '../src/components/GenericBoxInfo';
import Icon from '../src/components/Icon';
import Loading from '../src/components/Loading';

export default function Home() {
  const TOKENS = {
    location: 'c63386b4f77e46de817bdf94f552cddf',
    weather: '7ba73e0eb8efe773ed08bfd0627f07b8'
  }
  const [loading, setLoading] = useState(true);
  const [coords, setCoords] = useState({latitude: '', longitude: ''});
  const [navigatorLocationAvailability, setNavigatorLocationAvailability] = useState(false);
  const [city, setCity] = useState('');
  const [background, setBackground] = useState();
  const [unit, setUnit] = useState('metric');
  const [weather, setWeather] = useState();

  const fadedColor = '#cecece80';

  const getWeather = async (coords, unit) => {
    const weatherDataResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&exclude=hourly,minutely,alerts&units=${unit}&lang=pt_br&appid=${TOKENS.weather}`);
    const weatherDataObject = await weatherDataResponse.json();
    setWeather({
      today: {
        temp: Math.round(weatherDataObject.current.temp),
        pressure: weatherDataObject.current.pressure,
        humidity: weatherDataObject.current.humidity,
        wind: {
          speed: weatherDataObject.current.wind_speed, 
          deg: weatherDataObject.current.wind_deg
        },
        weather: weatherDataObject.current.weather
      },
      tomorrow: {
        temp: Math.round(weatherDataObject.daily[1].temp.day)
      },
      after_tomorrow: {
        temp: Math.round(weatherDataObject.daily[2].temp.day)
      }
    });
  }

  const changeUnitSystem = () => {
    if(unit === 'metric'){
      setUnit('imperial');
    } else {
      setUnit('metric');
    }
  }

  const getCityByCoordinates = (latitude, longitude) => {
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&limit=1&language=pr-BR&key=${TOKENS.location}`)
    .then(serverResponse => serverResponse.json())
    .then((response) => {
      if(!!response.results[0].components.city){
        setCity(response.results[0].components.city);
      } else {
        setCity(response.results[0].components.town);
      }
    });
  }

  const getCityByName = (cityName) => {
    setLoading(true);
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${cityName}&limit=1&language=pr-BR&key=${TOKENS.location}`)
    .then(serverResponse => serverResponse.json())
    .then((response) => {
      setCoords({
        latitude: response.results[0].geometry.lat,
        longitude: response.results[0].geometry.lng
      });
    });
  }

  const getLocation = () => {
    if ("geolocation" in navigator) {
      setNavigatorLocationAvailability(true);
      
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      }, (error) => {
        setNavigatorLocationAvailability(false);
        setLoading(false);
        console.error(error);
      });
    } else {
      setNavigatorLocationAvailability(false);
      setLoading(false);
    }
  }

  const getBingImage = async () => {
    const urlCORS = "https://api.allorigins.win/get?url=";
    const urlBing = "https://www.bing.com";
    const url = urlCORS + encodeURIComponent(urlBing + "/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR");
    try {
      const serverResponse = await fetch(url);
      const dados = await serverResponse.json();
      const JSONdata = JSON.parse(dados.contents);
      const imageUrl = urlBing + JSONdata.images[0].url;
      setBackground(imageUrl);
    } catch {
      console.log('erro');
    } finally {
      console.log('imagem funcionando');
    }
  }

  useEffect(() => {
    getLocation();
    getBingImage();
  }, []);

  useEffect(() => {
    if(!!coords.latitude && !!coords.longitude){
      getCityByCoordinates(coords.latitude, coords.longitude);
    }
  }, [coords]);

  useEffect(async () => {
    if (!!city) {
      setLoading(true);
      getWeather(coords, unit);
    }
  }, [city]);

  useEffect(() => {
    if(!!weather && !!weather.today){
      setLoading(false);
    }
  }, [weather])
  
  return(
    <>
    {
      !!background &&
      <FakeBody style={{ 
        background: `url(${background}) no-repeat`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}>
        <BackgroundCover style={{ background: `${fadedColor}` }}>
        {
          <Column>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const newCity = formData.get('city');
              getCityByName(newCity);
            }}>
              <input 
                placeholder={city} 
                name="city" 
                aria-label={city}
                type="text"
              />
              <button>Buscar cidade</button>
            </form>
            {
              !!loading ?
              <Loading />
              :
              !navigatorLocationAvailability &&
              !city &&
              !weather 
              ?
              <BigBox>
                <GenericBoxInfo />
              </BigBox>
              :
              !navigatorLocationAvailability &&
              !!city &&
              !!weather &&
              !!weather.today
              ?
              <>
                <BigBox>
                  <Icon name="compass" styles={{fontSize: '48px'}}/>
                  <BoxInfo data={weather.today} city={city} day="Hoje" onClick={() => changeUnitSystem()}/>
                </BigBox>
              </>
              :
              !!navigatorLocationAvailability &&
              !!city &&
              !!weather &&
              !!weather.today &&
              <>
                <BigBox>
                  <Icon name="compass" styles={{fontSize: '100px'}}/>
                  <BoxInfo data={weather.today} day="Hoje" onClick={() => changeUnitSystem()}/>
                </BigBox>
                <Box>
                  <Icon name="compass" styles={{fontSize: '44px'}}/>
                  <BoxInfo data={weather.tomorrow} day="Amanhã" onClick={() => changeUnitSystem()} />
                </Box>
                <Box>
                  <Icon name="compass" styles={{fontSize: '44px'}}/>
                  <BoxInfo data={weather.after_tomorrow} day="Depois de amanhã" onClick={() => changeUnitSystem()} />
                </Box>
              </>
            }
          </Column>
        }
        </BackgroundCover>
      </FakeBody>
    }
    </>
  )
}
