import React from 'react';

import { Container, WeatherIcon, WeatherInfo } from './styles';
import { ReactComponent as Sunny } from './../../icons/sunny.svg';

function TodayWeather() {
  return (
    <Container>
      <WeatherIcon>
        <Sunny />
      </WeatherIcon>
      <WeatherInfo>
        <p>Hoje</p>
        <p>32ºC</p>

        <h2>Ensolarado</h2>

        <p>
          Vento:
          <span>NO 6.4km/h</span>
        </p>
        <p>
          Humidade:
          <span>78%</span>
        </p>
        <p>
          Pressão:
          <span>1003hPA</span>
        </p>
      </WeatherInfo>
    </Container>
  );
}

export default TodayWeather;
