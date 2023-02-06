import { FunctionComponent } from 'react';

export type TemperatureObject = {
  value: number;
  scale: TemperatureScales;
  label: string;
};

export type WeatherInformation = {
  day: number;
  temperature: TemperatureObject;
  description: string;
  wind: {
    speed: number;
    deg: number;
  };
  humidity: number;
  pressure: number;
  icon: string;
};

export type WeatherInformationFormatted = {
  day: string;
  temperature: TemperatureObject;
  description: string;
  wind: string;
  humidity: string;
  pressure: string;
  icon: FunctionComponent;
  colors: {
    bgColor: string;
    textColor: string;
  };
};

export type UserLocation = {
  state: string;
  city: string;
};

export type UserCoordinates = {
  latitude: number;
  longitude: number;
};

export enum TemperatureScales {
  CELSIUS = '°C',
  FAHRENHEIT = '°F',
  DEFAULT = CELSIUS,
}

export type CoverImage = {
  title: string;
  url: string;
  copyright: string;
};
