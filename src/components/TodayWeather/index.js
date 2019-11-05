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

          <h2>{props.todayWeather.weather[0].description}</h2>

          <div><span>Vento: NO {props.todayWeather.wind.speed}km/h</span></div>   
          <div><span>Humidade: {props.todayWeather.main.humidity}%</span></div>
          <div><span>Pressão: {props.todayWeather.main.pressure}hPA</span></div>
        </WeatherInfo>
    </Container>
  );
}

export default TodayWeather;
