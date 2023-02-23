import { addDays } from 'date-fns';

import { OpenWeatherDayInfo, Weather } from '~/@types/openWeather';

type FormatWeatherDataProps = {
  daysToAdd?: number;
  data: OpenWeatherDayInfo;
  temperatureFormat: 'number' | 'object';
};

export function formatWeatherData({ data, temperatureFormat, daysToAdd = 0 }: FormatWeatherDataProps): Weather {
  const temperature = temperatureFormat === 'number' ? (data.temp as number) : (data.temp as { day: number }).day;

  return {
    humidity: data.humidity,
    pressure: data.pressure,
    icon: data.weather[0].icon,
    temperature: Math.round(temperature),
    date: addDays(new Date(), daysToAdd),
    description: data.weather[0].description,
    wind: {
      degrees: data.wind_deg,
      speed: data.wind_speed,
    },
  };
}
