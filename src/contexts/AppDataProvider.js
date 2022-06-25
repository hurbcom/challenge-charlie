import React, { createContext } from 'react';

const WeatherData = createContext({ latitude: 0, longitude: 0 });
export const useWeatherData = () => React.useContext(WeatherData);

export const WeatherDataProvider = props => {
  const { children, value } = props;

  return <WeatherData.Provider value={value}>{children}</WeatherData.Provider>;
};
