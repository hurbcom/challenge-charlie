import React from 'react';
import DayAfterTomorrow from './DayAfterTomorrow';
import { getForecastNextDaysByLatLong, getWeatherByLatLong } from '../api/OpenWeather';
import Header from './Header';
import './style/MainView.css';
import Today from './Today';
import Tomorrow from './Tomorrow';

const MainView = () => {
  const [cityName, setCityName] = React.useState('');
  const [forecast, setForecast] = React.useState({});
  const [tomorrowTemp, setTomorrowTemp] = React.useState({});
  const [dayAfterTemp, setDayAfterTemp] = React.useState({});

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getTodayWeatherInformation(position);
      getNextDaysWeatherInformation(position);
    });
  }, [forecast]);

  const getTodayWeatherInformation = (position) => {
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

  const getNextDaysWeatherInformation = (position) => {
    getForecastNextDaysByLatLong(position.coords.latitude, position.coords.longitude)
      .get()
      .then((response) => {
        const today = new Date();
        const tomorrowList = response.data.list.filter((item) => {
          return new Date(item.dt_txt).getDate() === today.getDate() + 1;
        });
        const dayAfterList = response.data.list.filter((item) => {
          return new Date(item.dt_txt).getDate() === today.getDate() + 2;
        });
        setTomorrowTemp(
          tomorrowList.reduce((total, next) => total + next.main.temp, 0) / tomorrowList.length
        );
        setDayAfterTemp(
          dayAfterList.reduce((total, next) => total + next.main.temp, 0) / dayAfterList.length
        );
      });
  };

  return (
    <section className="main-view">
      <Header cityName={cityName} />
      <Today forecast={forecast} />
      <Tomorrow tomorrowTemp={tomorrowTemp} />
      <DayAfterTomorrow dayAfterTemp={dayAfterTemp} />
    </section>
  );
};

export default MainView;
