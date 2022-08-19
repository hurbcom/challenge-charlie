import { IForecast } from '../../services/weather/types';

export interface IWeather extends IForecast {
  name?: string;
}

export type HandleLocationReturn = {
  latitude: number;
  longitude: number;
};

export type Geolocalization = {
  city: string;
  country: string;
  postcode?: string;
  state?: string;
  suburb?: string;
};

export interface WeatherContextPayload {
  getWeather: (location: string) => () => void;
  current: IForecast['current'] | undefined;
  otherDays: IForecast['otherDays'] | undefined;
  name: string | undefined;
}
