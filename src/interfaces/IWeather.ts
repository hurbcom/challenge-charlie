import { IForecast } from "./IForecast";
import { ICoordinate } from "./ICoordinate";
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
  coord: {
    lat: number;
    lon: number;
  };
}

export interface IWeather {
  temperature: number;
  weather: string;
  weatherType: IWeatherTypes;
  wind: number;
  humidity: number;
  pressure: number;
  forecast: IForecast[];
}
