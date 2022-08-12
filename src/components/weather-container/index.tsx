import React, { useContext } from 'react';
import { WeatherIcon } from '../weather-icon';
import { WeatherInfo } from '../weather-info';
import { Container, Day } from './styles';
import { AppDataContext } from '../../contexts/app-data';

export const WeatherContainer = () => {
  const { dailyWeather } = useContext(AppDataContext);
  const isOpen = false;

  if (!dailyWeather || !dailyWeather?.length) {
    return null;
  }

  return (
    <Container>
      {dailyWeather.map((dailyWeather, index) => (
        <Day isOpen={true} key={dailyWeather.day} dayNumber={index}>
          <WeatherIcon isOpen={true} iconCode={dailyWeather.iconId} />
          <WeatherInfo isOpen={true} {...dailyWeather} />
        </Day>
      ))}
    </Container>
  );
};
