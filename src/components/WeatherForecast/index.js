import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from './styles';

import LocationInput from '../LocationInput';
import TodayWeather from '../TodayWeather';
import NextDaysWeather from '../NextDaysWeather';
import Loading from '../Loading';

import { celsiusToFahrenheit, fahrenheitToCelsius } from '../../helpers/convertTemperatures';
import setWeatherForecastBackgroundColor from '../../helpers/weatherForecastBackgroundColor';

const {
  REACT_APP_OPEN_CAGE_API_URL: openCageApiUrl,
  REACT_APP_OPEN_CAGE_API_KEY: openCageApiKey,
  REACT_APP_OPEN_WEATHER_API_URL: openWeatherApiUrl,
  REACT_APP_OPEN_WEATHER_API_KEY: openWeatherApiKey,
} = process.env;

function WeatherForecast() {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [location, setLocation] = useState("");
  const [isLocationExists, setIsLocationExists] = useState(true);
  const [temperatureScale, setTemperatureScale] = useState("ºC");
  const [todayWeather, setTodayWeather] = useState();
  const [tomorrowWeather, setTomorrowWeather] = useState();
  const [afterTomorrowWeather, setAfterTomorrowWeather] = useState();

  useEffect(() => {
    fetchGeolocation();
  }, []);

  const fetchCurrentLocation = (lat, lng) => {
    return axios.get(`${openCageApiUrl}json?q=${lat},${lng}&key=${openCageApiKey}&language=pt&pretty=1`)
      .then(response => {
        return response.data.results[0].components;
      })
      .catch(error => {
        console.log(error);
      });
  }

  const fetchGeolocation = () => {
    navigator.geolocation.getCurrentPosition(async function (position) {
      const location = await fetchCurrentLocation(position.coords.latitude, position.coords.longitude);
      setLocation(`${location.city}, ${location.state}`);
      fetchWeather(location.city);
    });
  }

  const fetchWeather = (location) => {
    axios.get(`${openWeatherApiUrl}?q=${location}&lang=pt&APPID=${openWeatherApiKey}&units=metric`)
      .then(response => {
        const weather = response.data.list;

        const gradientColor = setWeatherForecastBackgroundColor(weather[0].main.temp);
        setBackgroundColor(gradientColor);

        setTodayWeather(weather[0]);
        setTomorrowWeather(weather[1].main.temp);
        setAfterTomorrowWeather(weather[2].main.temp);
        setIsLocationExists(true);
      })
      .catch(error => {
        console.log(error.response.data);
        setBackgroundColor(setWeatherForecastBackgroundColor(false));
        setIsLocationExists(false);
      });
  }

  const temperatureConvertion = (tempScale, convertCallback) => {
    setTemperatureScale(tempScale);
    todayWeather.main.temp = convertCallback(todayWeather.main.temp);
    setTodayWeather(todayWeather);
    setTomorrowWeather(convertCallback(tomorrowWeather));
    setAfterTomorrowWeather(convertCallback(afterTomorrowWeather));
  }

  const toggleTemperature = () => {
    if (temperatureScale === "ºC") {
      temperatureConvertion("ºF", celsiusToFahrenheit);
    } else {
      temperatureConvertion("ºC", fahrenheitToCelsius);
    }
  }

  if (!todayWeather || !tomorrowWeather || !afterTomorrowWeather) {
    return <Loading />;
  }
  return (
    <Container>
      <LocationInput
        fetchWeather={fetchWeather.bind(this)}
        location={location}
      />
      <TodayWeather
        backgroundColor={backgroundColor.today}
        isLocationExists={isLocationExists}
        todayWeather={todayWeather}
        temperatureScale={temperatureScale}
        toggleTemperature={toggleTemperature.bind(this)}
      />
      <NextDaysWeather
        backgroundColor={backgroundColor.tomorrow}
        dayName={"Amanhã"}
        isLocationExists={isLocationExists}
        temperature={tomorrowWeather}
        temperatureScale={temperatureScale}
        toggleTemperature={toggleTemperature.bind(this)}
      />
      <NextDaysWeather
        backgroundColor={backgroundColor.afterTomorrow}
        dayName={"Depois de Amanhã"}
        isLocationExists={isLocationExists}
        temperature={afterTomorrowWeather}
        temperatureScale={temperatureScale}
        toggleTemperature={toggleTemperature.bind(this)}
      />
    </Container>
  );
}

export default WeatherForecast;