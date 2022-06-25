import React from 'react';
import { WeatherIcon } from '../WeatherIcon';
import { WeatherInfo } from '../WeatherInfo';
import { Loading } from '../../Loading';
import { WeatherContainer } from './styles';

export const DayWeather = ({
  id,
  setId,
  currentId,
  isLoading,
  day,
  temperature,
  description,
  wind,
  humidity,
  pressure,
}) => {
  const isOpen = id === currentId;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <WeatherContainer id={id} onClick={setId(id)} isOpen={isOpen}>
      <WeatherIcon isOpen={isOpen} />
      <WeatherInfo
        isOpen={isOpen}
        day={day}
        temperature={temperature}
        description={description}
        wind={wind}
        humidity={humidity}
        pressure={pressure}
      />
    </WeatherContainer>
  );
};
