import { OpenWeatherDayInfo } from '~/@types/openWeather';

type FormatWeatherDataProps = {
  data: OpenWeatherDayInfo;
  temperatureFormat: 'number' | 'object';
};

export function formatWeatherData({ data, temperatureFormat }: FormatWeatherDataProps) {
  const temperature = temperatureFormat === 'number' ? (data.temp as number) : (data.temp as { day: number }).day;

  return {
    description: data.weather.description,
    humidity: data.humidity,
    icon: data.weather.icon,
    pressure: data.pressure,
    temperature,
    wind: {
      degrees: data.wind_deg,
      speed: data.wind_speed,
    },
  };
}
