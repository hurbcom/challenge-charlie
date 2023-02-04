import { WeatherInformation } from '../../helpers/models';
import { getCurrentWeatherByCity, getWeatherNextDaysByCity } from './open-weather-apis';

export const getWeatherForecastByCityName = async (
  cityName: string
): Promise<WeatherInformation[]> => {
  const result = [];
  const currentWeatherPromise = getCurrentWeatherByCity({ cityName });
  const weatherNextDaysPromise = getWeatherNextDaysByCity({ cityName });

  const [currentWeather, weatherNextDays] = await Promise.allSettled([
    currentWeatherPromise,
    weatherNextDaysPromise,
  ]);

  if (currentWeather.status === 'fulfilled' && currentWeather.value) {
    result.push(currentWeather.value);
  }

  if (weatherNextDays.status === 'fulfilled' && weatherNextDays.value) {
    weatherNextDays.value.forEach((weather) => result.push(weather));
  }

  return result;
};
