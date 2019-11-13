import React from 'react';
import { Container, IconWrapper, WeatherInfo, WeatherDescription, WeatherDetails } from './styles';
import WeatherIcon from '../WeatherIcon';

function TodayWeather(props) {
  const { main, weather, wind } = { ...props.todayWeather };

  const handleClick = (evt) => {
    evt.preventDefault();
    props.toggleTemperature();
  }

  const fetchWeatherInformation = () => {
    if (props.isLocationExists) {
      return (
        <>
          <p className="clickable" onClick={handleClick.bind(this)}>
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
        </>
      )
    }
    return (
      <>
        <span> Localidade não encontrada </span>
      </>
    );
  }

  return (
    <Container backgroundColor={props.backgroundColor}>
      <IconWrapper>
        <WeatherIcon
          isLocationExists={props.isLocationExists}
          weather={weather[0]}
        />
      </IconWrapper>
      <WeatherInfo>
        <p>Hoje</p>
        {fetchWeatherInformation()}
      </WeatherInfo>
    </Container>
  );
}

export default TodayWeather;
