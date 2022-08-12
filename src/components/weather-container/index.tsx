import React, { useContext, useState } from 'react';
import { WeatherIcon } from '../weather-icon';
import { WeatherInfo } from '../weather-info';
import { Container, Day } from './styles';
import { AppDataContext } from '../../contexts/app-data';

export const WeatherContainer = () => {
  const { dailyWeather } = useContext(AppDataContext);
  const [openIndex, setOpenIndex] = useState(0);

  if (!dailyWeather || !dailyWeather?.length) {
    return null;
  }

  return (
    <Container>
      {dailyWeather.map((dailyWeather, index) => (
        <Day
          onClick={() => setOpenIndex(index)}
          isOpen={openIndex === index}
          key={dailyWeather.day}
          dayNumber={index}
        >
          <WeatherIcon isOpen={openIndex === index} iconCode={dailyWeather.iconId} />
          <WeatherInfo isOpen={openIndex === index} {...dailyWeather} />
        </Day>
      ))}
    </Container>
  );
};
