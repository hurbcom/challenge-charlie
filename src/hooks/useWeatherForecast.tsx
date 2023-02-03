import { useEffect, useState } from 'react';
import {
  findCurrentWeatherByCityName,
  findWeatherForecastByCityName,
} from '../services/weather';
import { WeatherInformation } from '../helpers/models';

export function useWeatherForecast(cityName?: string) {
  const [loading, setLoading] = useState(false);
  const [weatherForecast, setWeatherForecast] = useState<WeatherInformation[]>(
    []
  );

  const handleWeatherForecast = async () => {
    const currentWeatherPromise = findCurrentWeatherByCityName(cityName!);
    const weatherForecastPromise = findWeatherForecastByCityName(cityName!);

    const [current, forecast] = await Promise.allSettled([
      currentWeatherPromise,
      weatherForecastPromise,
    ]);

    if (current.status === 'fulfilled' && current.value) {
      setWeatherForecast([current.value]);
    }

    if (forecast.status === 'fulfilled' && forecast.value) {
      setWeatherForecast((state) => [...state, ...(forecast.value as [])]);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (cityName) {
      setLoading(true);
      handleWeatherForecast();
    }
  }, [cityName]);

  return { weatherForecast, loading };
}
