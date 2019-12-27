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
          <p data-testid="temperature" className="clickable" onClick={handleClick}>
            {props.temperature.toFixed(0)}
            {props.temperatureScale}
          </p>
        </>
      )
    }
    return (
      <>
        <span data-testid="not-found">Não encontrada</span>
      </>
    );
  }

  return (
    <Container backgroundColor={props.backgroundColor}>
      <WeatherInfo>
        <p data-testid="dayname">{props.dayName}</p>
        {fetchWeatherInformation()}
      </WeatherInfo>
    </Container>
  );
}

export default NextDaysWeather;
