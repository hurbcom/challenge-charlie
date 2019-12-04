import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import axios from 'axios';
import { Container, InputWrapper, WeatherDiv } from './styles';

import { ReactComponent as Compass } from '../../assets/icons/44.svg';

export default function Main() {
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState('metric');
  const [location, setLocation] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function getUserLocation() {
      await navigator.geolocation.getCurrentPosition(async ({ coords }) => {
        const { data } = await axios.get(
          `https://api.opencagedata.com/geocode/v1/json?q=${coords.latitude},${coords.longitude}&key=c63386b4f77e46de817bdf94f552cddf&language=pt`
        );
        const { state } = data.results[0].components;
        setLocation(state);
      });
    }
    getUserLocation();
    setLoading(false);
  }, []);

  useEffect(() => {
    async function getWeather() {
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${location},BR&APPID=7ba73e0eb8efe773ed08bfd0627f07b8&units=${unit}&cnt=16&lang=pt`
      );
      const { name, country } = data.city;
      const { list } = data;
      setWeather(list);
      setInputValue(`${name}, ${country}`);
    }
    if (location !== null) {
      getWeather();
    }
  }, [location, unit]);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleInputBlur(e) {
    setLocation(e.target.value);
  }

  function handleUnit() {
    return unit === 'metric' ? setUnit('imperial') : setUnit('metric');
  }

  return (
    <Container>
      <InputWrapper>
        {loading ? <Loader type="Puff" color="#8c8885" /> : <Compass />}
        <input
          type="text"
          placeholder="Where are you?"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
      </InputWrapper>
      <WeatherDiv onClick={handleUnit}>Hoje</WeatherDiv>
      <WeatherDiv onClick={handleUnit}>Amanhã</WeatherDiv>
      <WeatherDiv onClick={handleUnit}>Depois de amanhã</WeatherDiv>
    </Container>
  );
}
