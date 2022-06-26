import React from 'react';
import { WeatherIcon } from '../WeatherIcon';
import { WeatherInfo } from '../WeatherInfo';
import { Loading, Error } from '../../index';
import { WeatherContainer } from './styles';

export const DayWeather = ({
  id,
  setId,
  currentId,
  isLoading,
  isError,
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

  if (isError) {
    return (
      <WeatherContainer id={id} onClick={setId(id)} isOpen={isOpen}>
        <Error isWeather={isOpen} />
      </WeatherContainer>
    );
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
