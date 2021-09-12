import React, { useState, useEffect } from 'react';
import Head from "next/head"

import BackgroundCover from '../src/components/BackgroundCover';
import BigBox from '../src/components/BigBox';
import Box from '../src/components/Box';
import BoxInfo from '../src/components/BoxInfo';
import Column from '../src/components/Column';
import FakeBody from '../src/components/FakeBody';
import Form from '../src/components/Form';
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

  const getIconById = (id) => {
    if(id < 299){
      return 'clouds-flash';
    } else if(id < 399){
      return 'drizzle';
    } else if(id < 599){
      return 'rain';
    } else if(id == 600 || id == 601 || id == 612 || id == 613 || id == 615 || id == 620){
      return 'snow';
    } else if(id == 602 || id == 611 || id == 616 || id == 621 || id == 622){
      return 'snow-heavy';
    } else if(id == 701){
      return 'mist';
    } else if(id == 711){
      return 'fog-cloud';
    } else if(id == 721 || id == 731 || id == 741 || id == 751 || id == 761 || id == 762 || id == 771 || id == 781){
      return 'fog';
    } else if(id == 801 || id == 802){
      return 'cloud';
    } else if(id == 803 || id == 804){
      return 'clouds';
    } else {
      return 'sun';
    }
  }

  const getWeather = async (coords) => {
    const weatherDataResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&exclude=hourly,minutely,alerts&units=metric&lang=pt_br&appid=${TOKENS.weather}`);
    const weatherDataObject = await weatherDataResponse.json();
    setWeather({
      today: {
        icon: getIconById(weatherDataObject.current.weather[0].id),
        temp: Math.round(weatherDataObject.current.temp),
        pressure: weatherDataObject.current.pressure,
        humidity: weatherDataObject.current.humidity,
        wind: {
          speed: weatherDataObject.current.wind_speed, 
          deg: weatherDataObject.current.wind_deg
        },
        weather: weatherDataObject.current.weather,
        color: Math.round(weatherDataObject.current.temp) < 15 ? '0, 110, 144' : Math.round(weatherDataObject.current.temp) > 35 ? '231, 111, 81' : '233, 196, 106'
      },
      tomorrow: {
        icon: getIconById(weatherDataObject.daily[1].weather[0].id),
        temp: Math.round(weatherDataObject.daily[1].temp.day),
        color: Math.round(weatherDataObject.daily[1].temp.day) < 15 ? '0, 110, 144' : Math.round(weatherDataObject.daily[1].temp.day) > 35 ? '231, 111, 81' : '233, 196, 106'
      },
      after_tomorrow: {
        icon: getIconById(weatherDataObject.daily[2].weather[0].id),
        temp: Math.round(weatherDataObject.daily[2].temp.day),
        color: Math.round(weatherDataObject.daily[2].temp.day) < 15 ? '0, 110, 144' : Math.round(weatherDataObject.daily[2].temp.day) > 35 ? '231, 111, 81' : '233, 196, 106'
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
      getWeather(coords);
    }
  }, [city]);

  useEffect(() => {
    if(!!weather && !!weather.today){
      setLoading(false);
    }
  }, [weather])
  
  return(
    <>
    <Head>
      <meta charset="UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Aplicativo Clima</title>
    </Head>
    {
      !!background &&
      <FakeBody style={{ 
        background: `url(${background}) no-repeat`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}>
        <BackgroundCover style={
          !!weather &&
          !!weather.today &&
          !!weather.today.color 
          ?
          {background: `rgba(${weather.today.color}, 0.50)`}
          :
          {background: `rgba(83, 83, 83, 0.50)`}
        }>
        {
          <Column>
            <Form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const newCity = formData.get('city');
              getCityByName(!!newCity ? newCity : 'Niterói');
            }}>
              <div className="iconPositioner">
                <Icon name="compass" styles={{fontSize: '32px', color: '#535353'}} />
              </div>
              <input 
                placeholder={city} 
                name="city" 
                aria-label={city}
                type="text"
              />
              <button>Buscar</button>
            </Form>
            {
              !!loading ?
              <Loading backgroundColor={`rgb(0, 110, 144)`}/>
              :
              !navigatorLocationAvailability &&
              !city &&
              !weather 
              ?
              <BigBox>
                <GenericBoxInfo />
              </BigBox>
              :
              !!city &&
              !!weather &&
              !!weather.today &&
              <>
                <BigBox style={{background: `rgba(${weather.today.color}, 0.87)`}}>
                  <Icon name={weather.today.icon}/>
                  <BoxInfo data={weather.today} day="Hoje" onClick={() => changeUnitSystem()} unit={unit}/>
                </BigBox>
                <Box style={{background: `rgba(${weather.tomorrow.color}, 0.87)`}}>
                  <Icon name={weather.tomorrow.icon}/>
                  <BoxInfo data={weather.tomorrow} day="Amanhã" onClick={() => changeUnitSystem()}  unit={unit}/>
                </Box>
                <Box style={{background: `rgba(${weather.after_tomorrow.color}, 0.87)`}}>
                  <Icon name={weather.after_tomorrow.icon}/>
                  <BoxInfo data={weather.after_tomorrow} day="Depois de amanhã" onClick={() => changeUnitSystem()}  unit={unit}/>
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
