import OpenCageService from '@/api/services/OpenCagesService';
import OpenWeatherService from '@/api/services/OpenWeatherService';
import { LocalityType } from '@/types/global';
import dayjs from 'dayjs';

const getLocationResults = async ({ latitude, longitude }: LocalityType) => {
  const { results } = await new OpenCageService({ latitude, longitude }).retrieveLocation();
  return results;
};

const getWeatherForecast = async (
  { latitude, longitude }: LocalityType,
  { today }: { today: string }
) => {
  const weatherList = await new OpenWeatherService({ latitude, longitude }).retrieveForecast();

  const forecast = weatherList.list.reduce((acc: Array<Object>, cur: any) => {
    if (dayjs(cur.dt_txt).isAfter(today)) {
      today = dayjs(today).add(21, 'hours').toString();
      acc.push({
        unixTime: cur.dt,
        date: cur.dt_txt,
        temp: `${Math.round(cur.main.temp)}°C`,
        temp_min: `${Math.round(cur.main.temp_min)}°C`,
        temp_max: `${Math.round(cur.main.temp_max)}°C`,
        feels_like: `${Math.round(cur.main.feels_like)}°C`,
        pressure: cur.main.pressure + 'hPA',
        humidity: cur.main.humidity + '%',
        windSpeed: cur.wind.speed,
        windDirection: OpenWeatherService.windDegreeToDirection(cur.wind.deg),
        windFull: `${OpenWeatherService.windDegreeToDirection(cur.wind.deg)} ${cur.wind.speed}km/h`,
        icon: cur.weather[0].icon,
        description: cur.weather[0].description,
      });
    }
    return acc;
  }, []);
  return { city: weatherList.city, forecast };
};

export { getLocationResults, getWeatherForecast };
