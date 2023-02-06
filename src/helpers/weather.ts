import { getColorByTemperatureAndIndex } from './colors';
import { handleTemperatureObject } from './temperature';
import { handleWindLabel } from './wind';
import { getIconById } from './icons';
import {
  TemperatureScales,
  WeatherInformation,
  WeatherInformationFormatted,
} from './models';

interface FormatWeatherForecastProps {
  weather: WeatherInformation;
  scale: TemperatureScales;
}

const daysMap: Record<number, string> = {
  0: 'hoje',
  1: 'amanhã',
  2: 'depois de amanhã',
};

export const formatWeatherForecast = (
  { weather, scale }: FormatWeatherForecastProps,
  index: number
): WeatherInformationFormatted => {
  return {
    day: daysMap[index],
    temperature: handleTemperatureObject(weather.temperature, scale),
    description: weather.description,
    wind: handleWindLabel(weather.wind.speed, weather.wind.deg),
    humidity: `${weather.humidity}%`,
    pressure: `${weather.pressure}hPA`,
    icon: getIconById(weather.icon),
    colors: getColorByTemperatureAndIndex(weather.temperature.value, index),
  };
};
