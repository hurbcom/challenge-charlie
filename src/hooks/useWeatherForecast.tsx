import { useEffect, useState } from 'react';
import { findWeatherForecastByCityName } from '../services/weather';
import { WeatherInformation } from '../helpers/models';

export function useWeatherForecast(cityName?: string) {
  const [loading, setLoading] = useState(false);
  const [weatherForecast, setWeatherForecast] = useState<WeatherInformation[]>([]);

  const handleWeatherForecast = async () => {
    const weatherForecast = await findWeatherForecastByCityName(cityName!);

    if (weatherForecast) {
      setWeatherForecast(weatherForecast);
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
