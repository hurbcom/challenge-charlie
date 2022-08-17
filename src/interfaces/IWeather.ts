import { IWeatherTypes } from "./IWeatherTypes";

export interface IWeatherRawData {
  weather: {
    description: string;
    main: IWeatherTypes;
  }[];
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  wind: {
    speed: number;
  };
}

export interface IWeather {
  temperature: number;
  weather: string;
  weatherType: IWeatherTypes;
  wind: number;
  humidity: number;
  pressure: number;
}
