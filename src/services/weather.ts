import { httpService } from './_http';
import { OpenWeatherApi } from '../utils/contracts';
import { WeatherInformation } from '../utils/models';

enum OpenWeatherApiService {
  WEATHER = 'weather',
  FORECAST = 'forecast',
}

type CurrentWeatherResultService = WeatherInformation;
type WeatherForecastResultService = WeatherInformation[];

const mapWeatherObjectApiResult = (
  data: OpenWeatherApi.WeatherObjectResult
) => {
  return {
    day: new Date(data.dt * 1000).toISOString(),
    temperature: `${data.main.temp}`,
    description: data.weather[0].description,
    wind: `${data.wind.speed}`,
    humidity: `${data.main.humidity}`,
    pressure: `${data.main.pressure}`,
    icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
  };
};

const openWeatherApiKey = '772920597e4ec8f00de8d376dfb3f094';
const formatOpenWeatherApiUrl = (
  term: string,
  service: OpenWeatherApiService
) => {
  return `http://api.openweathermap.org/data/2.5/${service}?q=${term}&appid=${openWeatherApiKey}&units=metric&lang=pt_br`;
};

export const findCurrentWeatherByCityName = async (
  cityName: string
): Promise<CurrentWeatherResultService | null> => {
  const url = formatOpenWeatherApiUrl(cityName, OpenWeatherApiService.WEATHER);
  const result = await httpService.get<OpenWeatherApi.WeatherObjectResult>(url);

  if (!result) return null;

  return mapWeatherObjectApiResult(result);
};

export const findWeatherForecastByCityName = async (
  cityName: string
): Promise<WeatherForecastResultService | null> => {
  const url = formatOpenWeatherApiUrl(cityName, OpenWeatherApiService.FORECAST);
  const result = await httpService.get<OpenWeatherApi.WeatherForecastResult>(
    url
  );

  if (!result) return null;

  return result.list.map(mapWeatherObjectApiResult);
};
