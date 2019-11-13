import React from 'react';

import { Container, WeatherIcon, WeatherInfo } from './styles';

function NextDaysWeather(props) {

  const handleClick = (evt) => {
    evt.preventDefault();
    props.toggleTemperature();
  }

  return (
    <Container backgroundColor={props.backgroundColor}>
      <WeatherIcon />
      <WeatherInfo>
        <p>{props.dayName}</p>
        <p
          className="clickable"
          onClick={handleClick}
        >
          {props.temperature.toFixed(0)}
          {props.temperatureScale}
        </p>
      </WeatherInfo>
    </Container>
  );
}

export default NextDaysWeather;
