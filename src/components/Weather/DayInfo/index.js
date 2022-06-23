import React from 'react';
import { WeatherContainer } from './styles';
import { WeatherIcon } from '../WeatherIcon';
import { WeatherInfo } from '../WeatherInfo';

export const Weather = props => {
  const { id, setId, currentId, day } = props;
  const isOpen = id === currentId;

  return (
    <WeatherContainer id={id} onClick={setId(id)} isOpen={isOpen}>
      <WeatherIcon isOpen={isOpen} />
      <WeatherInfo isOpen={isOpen} day={day} />
    </WeatherContainer>
  );
};
