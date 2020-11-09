import { IWeatherTemperature } from '../WeatherTemperature';

export type ICardTomorrow = IWeatherTemperature;

export interface ITemperature {
  day: string;
  tempToday: number;
}
