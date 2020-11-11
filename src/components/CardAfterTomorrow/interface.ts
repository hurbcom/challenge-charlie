import { IWeatherTemperature } from '../WeatherTemperature';

export type ICardAfterTomorrow = IWeatherTemperature;

export interface ITemperature {
  day: string;
  tempToday: number;
}
