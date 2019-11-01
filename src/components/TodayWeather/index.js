import React from 'react';

import { Container, WeatherIcon, WeatherInfo } from './styles';
import { ReactComponent as Sunny } from './../../icons/sunny.svg';

function TodayWeather(props) {
  return (
    <Container>
      <WeatherIcon>
        <Sunny />
      </WeatherIcon>
        <WeatherInfo>
          <p>Hoje</p>
          <p>{props.main ? props.main.temp : ''}ºC</p>

          <h2>{props.main ? props.weather.main : ''}</h2>

          <p>
            Vento:
          <span>NO {props.main ? props.wind.speed : ''}km/h</span>
          </p>
          <p>
            Humidade:
          <span>{props.main ? props.main.humidity : ''}</span>
          </p>
          <p>
            Pressão:
          <span>{props.main ? props.main.pressure : ''}hPA</span>
          </p>
        </WeatherInfo>
    </Container>
  );
}

export default TodayWeather;
