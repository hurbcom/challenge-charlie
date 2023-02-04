import { getColorByTemperatureAndIndex } from './colors';
import {
  TemperatureScales,
  WeatherInformation,
  WeatherInformationFormatted,
} from './models';
import { handleTemperatureObject } from './temperature';

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
    wind: `${weather.wind}`,
    humidity: `${weather.humidity}`,
    pressure: `${weather.pressure}hPa`,
    icon: `http://openweathermap.org/img/wn/${weather.icon}@4x.png`,
    colors: getColorByTemperatureAndIndex(weather.temperature.value, index),
  };
};
