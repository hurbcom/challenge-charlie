import React from 'react';

import { Container, IconWrapper, WeatherInfo, WeatherDescription, WeatherDetails } from './styles';
import WeatherIcon from '../WeatherIcon';

function TodayWeather(props) {
  const { main, weather, wind } = { ...props.todayWeather };

  const handleClick = (evt) => {
    evt.preventDefault();
    props.toggleTemperature();
  }

  return (
    <Container backgroundColor={props.backgroundColor}>
      <IconWrapper>
        <WeatherIcon weather={weather[0]} />
      </IconWrapper>
      <WeatherInfo>
        <p>Hoje</p>
        <p
          className="clickable"
          onClick={handleClick.bind(this)}
        >
          {main.temp.toFixed(0)}{props.temperatureScale}
        </p>

        <WeatherDescription>
          {weather[0].description}
        </WeatherDescription>

        <WeatherDetails>
          <p>Vento: NO {wind.speed}km/h</p>
          <p>Humidade: {main.humidity}%</p>
          <p>Pressão: {main.pressure}hPA</p>
        </WeatherDetails>
      </WeatherInfo>
    </Container>
  );
}

export default TodayWeather;
