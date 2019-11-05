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
  const [backgroundColor, setBackgroundColor] = useState("");
  const [location, setLocation] = useState("");
  const [todayWeather, setTodayWeather] = useState();
  const [tomorrowWeather, setTomorrowWeather] = useState("");
  const [afterTomorrowWeather, setAfterTomorrowWeather] = useState("");

  useEffect(() => {
    fetchBingImage();
    fetchGeolocation();
  }, []);

  const setBackground = (temperature) => {
    const lowTemperatureGradient = ['rgba(9, 132, 227, .7)', 'rgba(8, 118, 202, .7)', 'rgba(7, 103, 178, .7)'];
    const mildTemperatureGradient = ['rgba(241, 196, 15, .7)', 'rgba(218, 177, 13, .7)', 'rgba(194, 157, 11, .7)'];
    const highTemperatureGradient = ['rgba(231, 76, 60, .7)', 'rgba(228, 55, 37, .7)', 'rgba(214, 44, 26, .7)'];

    if (temperature < 15) {
      return setBackgroundColor(lowTemperatureGradient);
    }

    if (temperature > 35) {
      return setBackgroundColor(highTemperatureGradient);
    }

    return setBackgroundColor(mildTemperatureGradient);
  }

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
      setLocation(`${location.city}, ${location.state}` )
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
    axios.get(`${openWeatherApiUrl}?q=${location}&lang=pt&APPID=${openWeatherApiKey}&units=metric`)
      .then(response => {
        response.data.list[0].main.temp = response.data.list[0].main.temp.toFixed(0)
        setTodayWeather(response.data.list[0]);
        setBackground(response.data.list[0].main.temp)
        setTomorrowWeather(response.data.list[1].main.temp.toFixed(0));
        setAfterTomorrowWeather(response.data.list[2].main.temp.toFixed(0));
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
      <LocationInput location={location} fetchWeather={fetchWeather.bind(this)} />
      <TodayWeather todayWeather={todayWeather} backgroundColor={backgroundColor[0]} />
      <NextDaysWeather
        dayName={"Amanhã"}
        temperature={tomorrowWeather + `ºC`}
        backgroundColor={backgroundColor[1]}
      />
      <NextDaysWeather
        dayName={"Depois de Amanhã"}
        temperature={afterTomorrowWeather + `ºC`}
        backgroundColor={backgroundColor[2]}
      />
    </Container>
  );
}

export default WeatherForecast;