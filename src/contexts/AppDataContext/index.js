import React, { useState, createContext } from 'react';

const WeatherData = createContext(undefined);
export const useWeatherContext = () => React.useContext(WeatherData);

export const WeatherDataProvider = props => {
  const { children, value } = props;
  const [temperature, setTemperature] = useState(undefined);
  const [coordinates, setCoordinates] = useState({
    lat: undefined,
    lng: undefined,
  });

  const contextValue = {
    ...value,
    coordinates,
    setCoordinates,
    temperature,
    setTemperature,
  };

  return (
    <WeatherData.Provider value={contextValue}>{children}</WeatherData.Provider>
  );
};
