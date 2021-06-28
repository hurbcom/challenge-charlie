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

type Status = {
  type: 'Normal' | 'Error';
  message: string;
}

type WeatherContextData = {
  isFetching: boolean;
  weatherData: WeatherState;
  status: Status,

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

  const [status, setStatus] = useState<Status>({
    type: 'Normal',
    message: '',
  });

  const fetchWeatherByLocation = useCallback(async (
    params: GetWeatherByLocationParams,
  ): Promise<void> => {
    try {
      setIsFetching(true);

      setStatus({
        type: 'Normal',
        message: 'Buscando...',
      });

      setWeatherData({} as WeatherState);
      const data = await CharlieAPI.getWeather(params);
      setWeatherData(data);

      setStatus({
        type: 'Normal',
        message: '',
      });
    } catch (error) {
      setStatus({
        type: 'Error',
        message: error.message,
      });
    } finally {
      setIsFetching(false);
    }
  }, []);

  const weatherByDays = useMemo(() => (weatherData.weatherByDays
    ? weatherData.weatherByDays?.map((day) => ({
      ...day,
      temperatureInCelsius: getCelsiusByFahrenheit(
        day.temperatureInFahrenheit,
      ),
      temperatureInFahrenheit: Math.round(day.temperatureInFahrenheit),
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
        status,
        fetchWeatherByLocation,
        isFetching,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
