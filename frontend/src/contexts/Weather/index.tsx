import React, {
  createContext, useCallback, useMemo, useState,
} from 'react';

import CharlieAPI from '@libraries/CharlieAPI';
import getCelsiusByFahrenheit from '@utils/functions/getCelsiusByFahrenheit';

import {
  GetWeatherByLocationParams,
} from 'src/interfaces/GetWeatherByLocationParams';

import {
  WeatherClassifications,
} from 'src/interfaces/WeatherClassifications';

type WeatherState = {
  city: string;
  state: string;
  latitude: number;
  longitude: number;
  weatherByDays: Array<{
    classification: WeatherClassifications;
    temperatureInFahrenheit: number;
    temperatureInCelsius?: number;
    windSpeedInMetersBySecond: number;
    windDirectionInAzimuthDegrees: number;
    humidity: number;
    pressure: number
  }>;
}

type FetchWeatherByLocationPàrams = GetWeatherByLocationParams;

type WeatherContextData = {
  isFetching: boolean;
  weatherData: WeatherState;
  fetchWeatherByLocation(data: FetchWeatherByLocationPàrams): Promise<void>;
};

export const WeatherContext = createContext<WeatherContextData>(
  {} as WeatherContextData,
);

export const WeatherProvider: React.FC = ({ children }) => {
  const [
    weatherData,
    setWeatherData,
  ] = useState<WeatherState>({} as WeatherState);

  const [isFetching, setIsFetching] = useState(false);

  const fetchWeatherByLocation = useCallback(async (
    params: GetWeatherByLocationParams,
  ): Promise<void> => {
    setIsFetching(true);

    const data = await CharlieAPI.getWeather(params);
    setWeatherData(data);

    setIsFetching(false);
  }, []);

  const weatherByDays = useMemo(() => (weatherData.weatherByDays
    ? weatherData.weatherByDays?.map((day) => ({
      ...day,
      temperatureInCelsius: getCelsiusByFahrenheit(
        day.temperatureInFahrenheit,
      ),
    }))
    : []
  ), [weatherData]);

  return (
    <WeatherContext.Provider
      value={{
        weatherData: {
          ...weatherData,
          weatherByDays,
        },
        fetchWeatherByLocation,
        isFetching,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
