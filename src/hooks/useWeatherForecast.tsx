import { useEffect, useState } from 'react';
import { getWeatherForecastByCityName } from '../services/weather/get-weather-forecast-by-city';
import { formatWeatherForecast } from '../helpers/weather';
import { TemperatureScales, WeatherInformationFormatted } from '../helpers/models';
import { handleTemperatureObject } from '../helpers/temperature';
import { messages } from '../helpers/messages';

export function useWeatherForecast(scale: TemperatureScales, cityName?: string) {
  const [message, setMessage] = useState(messages.initial);
  const [weatherForecast, setWeatherForecast] = useState<WeatherInformationFormatted[]>(
    []
  );

  const toggleTemperatureScale = () => {
    const toggled = weatherForecast.map((weather) => ({
      ...weather,
      temperature: handleTemperatureObject(weather.temperature, scale),
    }));
    setWeatherForecast(toggled);
  };

  const handleClearWeatherData = () => {
    if (weatherForecast.length > 0) {
      setWeatherForecast([]);
    }
  };

  const handleWeatherForecast = async () => {
    setMessage(messages.loading);
    const result = await getWeatherForecastByCityName(cityName!);

    if (!result || !result.length) {
      setMessage(messages.notFound);
      handleClearWeatherData();
      return;
    }

    const resultFormatted = result.map((weather, index) =>
      formatWeatherForecast({ weather, scale }, index)
    );

    setWeatherForecast(resultFormatted);
    setMessage('');
  };

  useEffect(() => {
    const handler = cityName ? handleWeatherForecast : handleClearWeatherData;
    handler();
  }, [cityName]);

  useEffect(() => {
    toggleTemperatureScale();
  }, [scale]);

  return { weatherForecast, message };
}
