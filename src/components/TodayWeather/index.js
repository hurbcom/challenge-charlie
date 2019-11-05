import React from 'react';

import { Container, IconWrapper, WeatherInfo } from './styles';
import WeatherIcon from '../WeatherIcon';

function TodayWeather(props) {
  return (
    <Container backgroundColor={props.backgroundColor}>
      <IconWrapper>
        <WeatherIcon weather={props.todayWeather.weather[0]}/>
      </IconWrapper>
        <WeatherInfo>
          <p>Hoje</p>
          <p>{props.todayWeather.main.temp}ºC</p>

          <h2>{props.todayWeather.weather.main}</h2>

          <p>
            Vento:
            <span>NO {props.todayWeather.wind.speed}km/h</span>
          </p>
          <p>
            Humidade:
            <span>{props.todayWeather.main.humidity}</span>
          </p>
          <p>
            Pressão:
            <span>{props.todayWeather.main.pressure}hPA</span>
          </p>
        </WeatherInfo>
    </Container>
  );
}

export default TodayWeather;
