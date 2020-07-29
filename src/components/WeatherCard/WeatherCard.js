import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';

import FutureWeather from './FutureWeather/FutureWeather';
import TodayWeather from './TodayWeather/TodayWeather';

import { openCageKey, openWeatherKey } from '../../config/apiKeys';

import { convertCelsiusFahrenheit } from '../../utils/unitConvertion';

export default () => {
  const [location, setLocation] = React.useState(null);

  const [weatherData, setWeatherData] = React.useState(null);
  const [unitSelected, setUnitSelected] = React.useState('C');

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoords);
    } else {
      alert('Não foi possível verificar sua localização. Por favor, atualize seu navegador.');
    }
  }, []);

  const getCoords = (position) => {
    const coords = {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    };

    getCityName(coords);
    getWeather(coords);
  }

  const getCityName = async ({ lat, lon }) => {
    await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${openCageKey}`)
      .then(res => res.json())
      .then(data => {
        const location = data.results[0].components;
        setLocation(location);
      }).catch(err => console.log(err));
  }

  const getWeather = async ({ lat, lon }) => {
    await fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${openWeatherKey}&lang=pt_br&units=metric`)
      .then(res => res.json())
      .then(data => {
        console.log('data', data)
        const weatherDataObj = {
          current: {
            temp: data.current.temp.toFixed(),
            humidity: data.current.humidity,
            pressure: data.current.pressure,
            windSpeed: data.wind_speed,
            windDeg: data.wind_deg,
            mood: data.current.weather[0].description
          },
          tomorrow: { temp: data.daily[1].temp.day.toFixed() },
          dayAfter: { temp: data.daily[2].temp.day.toFixed() }
        };

        setWeatherData(weatherDataObj);
      }).catch(err => console.log(err));
  }

  const convertUnits = () => {
    const convertedWeatherData = {
      ...weatherData,
      current: { ...weatherData.current, temp: convertCelsiusFahrenheit(weatherData.current.temp, unitSelected) },
      tomorrow: { temp: convertCelsiusFahrenheit(weatherData.tomorrow.temp, unitSelected) },
      dayAfter: { temp: convertCelsiusFahrenheit(weatherData.dayAfter.temp, unitSelected) },
    };

    setUnitSelected(unitSelected === 'C' ? 'F' : 'C');
    setWeatherData(convertedWeatherData);
  }

  return (
    <>
      {weatherData && location &&
        <div className="d-flex flex-center h-100">
          <Card style={{ width: '50%', backgroundColor: 'transparent' }}>
            <CardContent style={{ padding: 0, }}>
              <div className="card-title">
                <ExploreOutlinedIcon size="small" style={{ color: 'rgba(142, 138, 135, 1)' }} />
                <p style={{ paddingLeft: '10px' }}> {location.city}, {location.state}</p>
              </div>

              <TodayWeather
                currentWeather={weatherData.current}
                unitSelected={unitSelected}
                convertUnits={convertUnits}
              />

              <FutureWeather
                tomorrow={weatherData.tomorrow}
                dayAfter={weatherData.dayAfter}
                unitSelected={unitSelected}
                convertUnits={convertUnits}
              />
            </CardContent>
          </Card>
        </div>
      }
    </>
  );
}