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
  isFetching,
  isError,
  day,
  weatherId,
  temperature,
  description,
  wind,
  humidity,
  pressure,
  elementType,
}) => {
  const isOpen = id === currentId;

  if (isLoading && isFetching) {
    return <Loading />;
  }

  if (isError || elementType === 'number') {
    return (
      <WeatherContainer id={id} onClick={setId(id)} isOpen={isOpen}>
        <Error isWeather={isOpen} />
      </WeatherContainer>
    );
  }

  return (
    <WeatherContainer id={id} onClick={setId(id)} isOpen={isOpen}>
      <WeatherIcon isOpen={isOpen} weatherId={weatherId} />
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
