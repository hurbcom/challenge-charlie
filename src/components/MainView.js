import React from 'react';
import DayAfterTomorrow from './DayAfterTomorrow';
import { getWeatherByLatLong } from '../api/OpenWeather';
import Header from './Header';
import './style/MainView.css';
import Today from './Today';
import Tomorrow from './Tomorrow';

const MainView = () => {
  const [cityName, setCityName] = React.useState('');
  const [forecast, setForecast] = React.useState({});

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherInformation(position);
    });
  }, [forecast]);

  const getWeatherInformation = (position) => {
    getWeatherByLatLong(position.coords.latitude, position.coords.longitude)
      .get()
      .then((weatherForecast) => {
        setCityName(`${weatherForecast.data.name}, ${weatherForecast.data.sys.country}`);
        setForecast({
          temperature: weatherForecast.data.main.temp,
          weather: weatherForecast.data.weather[0].description,
          windSpeed: weatherForecast.data.wind.speed,
          humidity: weatherForecast.data.main.humidity,
          pressure: weatherForecast.data.main.pressure
        });
      });
  };

  return (
    <section className="main-view">
      <Header cityName={cityName} />
      <Today forecast={forecast} />
      <Tomorrow />
      <DayAfterTomorrow />
    </section>
  );
};

export default MainView;
