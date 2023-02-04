import { httpService } from '../_http';
import {
  IGetCurrentWeatherByCity,
  IGetWeatherNextDaysByCity,
  IOpenWeatherApi,
} from '../../helpers/contracts';
import {
  filterOpenWeatherNextDaysApiResult,
  formatOpenWeatherApiUrl,
  mapOpenWeatherObjectApiResult,
} from './open-weather-helpers';

export const getCurrentWeatherByCity = async ({
  cityName,
}: IGetCurrentWeatherByCity.Params): Promise<IGetCurrentWeatherByCity.Result> => {
  const url = formatOpenWeatherApiUrl(cityName, IOpenWeatherApi.ServiceType.WEATHER);
  const result = await httpService.get<IOpenWeatherApi.WeatherObjectResult>(url);

  if (!result) return null;

  return mapOpenWeatherObjectApiResult(result);
};

export const getWeatherNextDaysByCity = async ({
  cityName,
}: IGetWeatherNextDaysByCity.Params): Promise<IGetWeatherNextDaysByCity.Result> => {
  const url = formatOpenWeatherApiUrl(cityName, IOpenWeatherApi.ServiceType.FORECAST);
  const result = await httpService.get<IOpenWeatherApi.WeatherForecastResult>(url);

  if (!result) return null;

  return result.list
    .filter(filterOpenWeatherNextDaysApiResult)
    .map(mapOpenWeatherObjectApiResult);
};
