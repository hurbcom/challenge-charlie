import React from 'react';
import { Container, WeatherInfo } from './styles';

function NextDaysWeather(props) {

  const handleClick = (evt) => {
    evt.preventDefault();
    props.toggleTemperature();
  }

  const fetchWeatherInformation = () => {
    if (props.isLocationExists) {
      return (
        <>
          <p className="clickable" onClick={handleClick}>
            {props.temperature.toFixed(0)}
            {props.temperatureScale}
          </p>
        </>
      )
    }
    return (
      <>
        <span> Não encontrada </span>
      </>
    );
  }

  return (
    <Container backgroundColor={props.backgroundColor}>
      <WeatherInfo>
        <p>{props.dayName}</p>
        {fetchWeatherInformation()}
      </WeatherInfo>
    </Container>
  );
}

export default NextDaysWeather;
