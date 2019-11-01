import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { Container } from './styles';
import LocationInput from '../LocationInput';
import TodayWeather from '../TodayWeather';
import NextDaysWeather from '../NextDaysWeather';

function WeatherForecast() {
  const [location, setLocation] = useState("");
  const [todayWeather, setTodayWeather] = useState([]);
  const [tomorrowWeather, setTomorrowWeather] = useState("");
  const [afterTomorrowWeather, setAfterTomorrowWeather] = useState("");

  useEffect(() => {
    getGeolocation();
  }, []);

  const getGeolocation = () => {
    navigator.geolocation.getCurrentPosition(async function(position) {
      await getGeoCoordinates(position.coords.latitude, position.coords.longitude)
    });
  }

  const getGeoCoordinates = async(lat, lng) => {
    const url = 'https://api.opencagedata.com/geocode/v1/json?'
    const key = 'c63386b4f77e46de817bdf94f552cddf'
    await axios.get(url + `q=` + lat + `,` + lng + `&key=` + key + `&language=pt&pretty=1'`)
      .then(response => {
        console.log(response.data);
        const location = response.data.results[0].components;
        setLocation(location.city + ', ' + location.state);
        getWeather(location.city)
      })
      .catch(error => {
        console.log(error);
      });
  }

  const getWeather = (location) => {
    const url = 'http://api.openweathermap.org/data/2.5/forecast?q='+ location + '&APPID=7ba73e0eb8efe773ed08bfd0627f07b8&units=metric'
    axios.get(url)
      .then(response => {
        console.log(response.data);
        setTodayWeather(response.data.list[0]);
        setTomorrowWeather(response.data.list[1].main.temp.toFixed(1));
        setAfterTomorrowWeather(response.data.list[2].main.temp.toFixed(1));
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <Container>
      <LocationInput location={location} getWeather={getWeather.bind(this)} />
      <TodayWeather main={todayWeather.main} weather={todayWeather.weather} wind={todayWeather.wind} />
      <NextDaysWeather dayName={"Amanhã"} temperature={tomorrowWeather + `ºC`} />
      <NextDaysWeather dayName={"Depois de Amanhã"} temperature={afterTomorrowWeather + `ºC`} />
    </Container>
  );
}

export default WeatherForecast;