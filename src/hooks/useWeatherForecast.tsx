import { useEffect, useState } from 'react';
import { WeatherInformation } from '../helpers/models';
import { getWeatherForecastByCityName } from '../services/weather/get-weather-forecast-by-city';

export function useWeatherForecast(cityName?: string) {
  const [loading, setLoading] = useState(false);
  const [weatherForecast, setWeatherForecast] = useState<WeatherInformation[]>([]);

  const handleWeatherForecast = async () => {
    const weatherForecast = await getWeatherForecastByCityName(cityName!);

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
