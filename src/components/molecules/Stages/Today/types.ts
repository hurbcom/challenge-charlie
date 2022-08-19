import { ScaleEnum, TWeatherEnum } from '../types';

export type TWeatherTypes =
  | 'Thunderstorm'
  | 'Drizzle'
  | 'Rain'
  | 'Snow'
  | 'Atmosphere'
  | 'Mist'
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
  onChangeScale?: () => void;
  scale?: ScaleEnum;
}
