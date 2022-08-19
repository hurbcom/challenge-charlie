import React from 'react';
import { WeatherContext } from '../contexts/Weather';
import { WeatherContextPayload } from '../contexts/Weather/types';

function useWeather(): WeatherContextPayload {
  const context = React.useContext(WeatherContext);

  if (!context) {
    throw new Error('useWeather should be within WeatherProvider or WeatherContainer');
  }

  return context;
}

export default useWeather;
