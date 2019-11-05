import React from 'react';

import { Container, WeatherIcon, WeatherInfo } from './styles';

function NextDaysWeather(props) {
  return (
    <Container backgroundColor={props.backgroundColor}>
      <WeatherIcon />
      <WeatherInfo>
        <p>{props.dayName}</p>
        <p>{props.temperature}</p>
      </WeatherInfo>
    </Container>
  );
}

export default NextDaysWeather;
