import { httpService } from './_http';
import { OpenWeatherApi } from '../helpers/contracts';
import { WeatherInformation } from '../helpers/models';
import { getColorByTemperatureAndIndex } from '../helpers/colors';
import { addDays, isMidday, isWithinPeriod } from '../helpers/datetime';

type WeatherForecastResultService = WeatherInformation[];

const daysMap: Record<number, string> = {
  0: 'hoje',
  1: 'amanhã',
  2: 'depois de amanhã',
};

const mapWeatherObjectApiResult = (
  data: OpenWeatherApi.WeatherObjectResult,
  index: number = 0
) => {
  return {
    day: daysMap[index],
    temperature: `${data.main.temp}`,
    description: data.weather[0].description,
    wind: `${data.wind.speed * 3.6}`, // add helper to convert mt/s - km/h
    humidity: `${data.main.humidity}%`,
    pressure: `${data.main.pressure}hPa`,
    icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
    colors: getColorByTemperatureAndIndex(data.main.temp, index),
  };
};

const openWeatherApiKey = '772920597e4ec8f00de8d376dfb3f094';
const formatOpenWeatherApiUrl = (term: string, service: OpenWeatherApi.ServiceType) => {
  const url = new URL(`http://api.openweathermap.org/data/2.5/${service}`);

  url.searchParams.append('q', term);
  url.searchParams.append('appid', openWeatherApiKey);
  url.searchParams.append('units', 'metric');
  url.searchParams.append('lang', 'pt_br');

  if (service === OpenWeatherApi.ServiceType.FORECAST) {
    url.searchParams.append('cnt', '24');
  }

  return url;
};

const filterWeatherNextDaysObjectApiResult = (
  data: OpenWeatherApi.WeatherObjectResult
) => {
  const tomorrow = addDays(new Date(), 1);
  const dateCurrentItem = new Date(data.dt_txt);

  if (!isWithinPeriod(dateCurrentItem, tomorrow, 2)) {
    return false;
  }

  if (!isMidday(new Date(data.dt_txt))) {
    return false;
  }

  return true;
};

const findCurrentWeatherByCity = async (
  cityName: string
): Promise<OpenWeatherApi.WeatherObjectResult | null> => {
  const url = formatOpenWeatherApiUrl(cityName, OpenWeatherApi.ServiceType.WEATHER);
  const result = await httpService.get<OpenWeatherApi.WeatherObjectResult>(url);

  if (!result) return null;

  return result;
};

const findWeatherNextDaysByCity = async (
  cityName: string
): Promise<OpenWeatherApi.WeatherObjectResult[] | null> => {
  const url = formatOpenWeatherApiUrl(cityName, OpenWeatherApi.ServiceType.FORECAST);
  const result = await httpService.get<OpenWeatherApi.WeatherForecastResult>(url);

  if (!result) return null;

  return result.list;
};

export const findWeatherForecastByCityName = async (
  cityName: string
): Promise<WeatherForecastResultService> => {
  const result = [];
  const currentWeatherPromise = findCurrentWeatherByCity(cityName);
  const weatherNextDaysPromise = findWeatherNextDaysByCity(cityName);

  const [currentWeather, weatherNextDays] = await Promise.allSettled([
    currentWeatherPromise,
    weatherNextDaysPromise,
  ]);

  if (currentWeather.status === 'fulfilled' && currentWeather.value) {
    result.push(currentWeather.value);
  }

  if (weatherNextDays.status === 'fulfilled' && weatherNextDays.value) {
    const filtered = weatherNextDays.value.filter(filterWeatherNextDaysObjectApiResult);
    filtered.forEach((weather) => result.push(weather));
  }

  return result.map(mapWeatherObjectApiResult);
};
