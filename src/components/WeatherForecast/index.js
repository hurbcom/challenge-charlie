import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { Container } from './styles';
import LocationInput from '../LocationInput';
import TodayWeather from '../TodayWeather';
import NextDaysWeather from '../NextDaysWeather';
import Loading from '../Loading';

const {
  REACT_APP_CORS_ANYWHERE: corsAnyWhere,
  REACT_APP_BING_API_URL: bingApiUrl,
  REACT_APP_OPEN_CAGE_API_URL: openCageApiUrl,
  REACT_APP_OPEN_CAGE_API_KEY: openCageApiKey,
  REACT_APP_OPEN_WEATHER_API_URL: openWeatherApiUrl,
  REACT_APP_OPEN_WEATHER_API_KEY: openWeatherApiKey,
} = process.env;

function WeatherForecast() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [todayWeather, setTodayWeather] = useState();
  const [tomorrowWeather, setTomorrowWeather] = useState("");
  const [afterTomorrowWeather, setAfterTomorrowWeather] = useState("");

  useEffect(() => {
    fetchBingImage();
    fetchGeolocation();
  }, []);

  const fetchBingImage = () => {
    axios.get(`${corsAnyWhere}${bingApiUrl}/HPImageArchive.aspx?format=js&idx=0&n=1`)
      .then(response => {
        setBackgroundImage(`${bingApiUrl}/${response.data.images[0].url}`);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const fetchGeolocation = () => {
    navigator.geolocation.getCurrentPosition(async function(position) {
      const location = await fetchCurrentLocation(position.coords.latitude, position.coords.longitude)
      fetchWeather(location.city)
    });
  }

  const fetchCurrentLocation = (lat, lng) => {
    return axios.get(`${openCageApiUrl}json?q=${lat},${lng}&key=${openCageApiKey}&language=pt&pretty=1`)
      .then(response => {
        return response.data.results[0].components;
      })
      .catch(error => {
        console.log(error);
      });
  }

  const fetchWeather = (location) => {
    axios.get(`${openWeatherApiUrl}?q=${location}&APPID=${openWeatherApiKey}&units=metric`)
      .then(response => {
        setTodayWeather(response.data.list[0]);
        setTomorrowWeather(response.data.list[1].main.temp.toFixed(1));
        setAfterTomorrowWeather(response.data.list[2].main.temp.toFixed(1));
      })
      .catch(error => {
        console.log(error);
      });
  }

  if (!todayWeather) {
    return <Loading />;
  }
  return (
    <Container background={backgroundImage}>
      <LocationInput fetchWeather={fetchWeather.bind(this)} />
      <TodayWeather todayWeather={todayWeather} />
      <NextDaysWeather dayName={"Amanhã"} temperature={tomorrowWeather + `ºC`} />
      <NextDaysWeather dayName={"Depois de Amanhã"} temperature={afterTomorrowWeather + `ºC`} />
    </Container>
  );
}

export default WeatherForecast;