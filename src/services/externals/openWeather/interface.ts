export interface IOpenWeather {
  current: ICurrent;
  daily: IDaily[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
}

export interface ICoordinates {
  lat: number;
  lng: number;
}

export interface ICurrent extends IWeatherDetails {
  feels_like: number;
  temp: number;
}

export interface IDaily extends IWeatherDetails {
  feels_like: IFeelsLike;
  pop: number;
  temp: ITemp;
}

export interface IFeelsLike {
  day: number;
  eve: number;
  morn: number;
  night: number;
}

export interface ITemp extends IFeelsLike {
  max: number;
  min: number;
}

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IWeatherDetails {
  clouds: number;
  dew_point: number;
  dt: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  uvi: number;
  visibility: number;
  weather: IWeather[];
  wind_deg: number;
  wind_speed: number;
}
