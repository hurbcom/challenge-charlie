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
