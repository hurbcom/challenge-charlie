import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { GlobalStyles, Container, InputWrapper, WeatherDiv } from './styles';

import { ReactComponent as Compass } from '../../assets/icons/44.svg';

export default function Main() {
  const [background, setBackground] = useState('');
  const [unit, setUnit] = useState('metric');
  const [location, setLocation] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [weather, setWeather] = useState(undefined);

  useEffect(() => {
    async function getBackground() {
      const { data } = await api.get('/wallpaper');
      setBackground(data);
    }
    async function getUserLocation() {
      const geo = navigator.geolocation;
      await geo.getCurrentPosition(async position => {
        const { latitude, longitude } = position.coords;
        const { data } = await api.get('/geo-location', {
          params: { latitude, longitude },
        });
        setLocation(`${data.state}, ${data.country}`);
        setInputValue(`${data.state}, ${data.country}`);
      });
    }
    getBackground();
    getUserLocation();
  }, []);

  useEffect(() => {
    async function getWeather() {
      const { data } = await api.get('/weather', {
        params: { location, unit },
      });
      console.log(data);
      /* setWeather(data); */
    }
    getWeather();
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
    <>
      <GlobalStyles background={background} />

      <Container>
        <InputWrapper>
          <Compass />
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
    </>
  );
}
