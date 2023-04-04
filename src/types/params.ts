import dayjs from 'dayjs';
import { LocalityType as LocationResultsParams } from './global';

const today = dayjs().format('YYYY-MM-DD');

export { LocationResultsParams };

export interface WeatherForecastParams {
  latitude?: string;
  longitude?: string;
  browserDate?: string;
  count?: string
}

export interface BuildWeatherContentParams {
  weatherList: Array<object>;
  count: string;
  browserDate: string;
}
