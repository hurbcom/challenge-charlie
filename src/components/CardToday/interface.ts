import { IIcon } from '../Icon';
import { IWeatherInformation } from '../WeatherInformation';
import { IWeatherTemperature } from '../WeatherTemperature';

export interface ICardToday
  extends IIcon,
    IWeatherInformation,
    IWeatherTemperature {}

export interface ITemperature {
  day: string;
  tempToday: number;
}
