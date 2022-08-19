import { TWeatherEnum } from '../types';

export type TWeatherTypes =
  | 'Thunderstorm'
  | 'Drizzle'
  | 'Rain'
  | 'Snow'
  | 'Atmosphere'
  | 'Clear'
  | 'Clouds';

export interface IToday {
  loading?: boolean;
  temperature?: number;
  weatherColor?: TWeatherEnum;
  weatherType?: TWeatherTypes;
  wind?: number;
  humidity?: number;
  pressure?: number;
}
