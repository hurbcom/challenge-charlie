import { useEffect, useState } from 'react';
import {
  TemperatureScales,
  WeatherInformation,
  WeatherInformationFormatted,
} from '../helpers/models';
import { formatWeatherForecast } from '../helpers/weather';
import { getWeatherForecastByCityName } from '../services/weather/get-weather-forecast-by-city';

export function useWeatherForecast(scale: TemperatureScales, cityName?: string) {
  const [loading, setLoading] = useState(false);
  const [weatherForecast, setWeatherForecast] = useState<WeatherInformation[]>([]);
  const [weatherForecastFormatted, setWeatherForecastFormatted] = useState<
    WeatherInformationFormatted[]
  >([]);

  const handleWeatherForecast = async () => {
    const result = await getWeatherForecastByCityName(cityName!);

    if (result) {
      setWeatherForecast(result);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (cityName) {
      setLoading(true);
      handleWeatherForecast();
    }
  }, [cityName]);

  useEffect(() => {
    const formatted = weatherForecast.map((weather, index) =>
      formatWeatherForecast({ weather, scale }, index)
    );
    setWeatherForecastFormatted(formatted);
  }, [weatherForecast, scale]);

  return { weatherForecast, weatherForecastFormatted, loading };
}
