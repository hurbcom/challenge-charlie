interface IForecastBaseData {
  dt: number;
  sunrise: number;
  sunset: number;
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  clouds: number;
  pop: number;
  uvi: number;
}

export interface ICurrent extends IForecastBaseData {
  temp: number;
}

export interface IDaily extends IForecastBaseData {
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
}

export interface IForecast {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: ICurrent;
  daily: IDaily[];
}

export interface ILocationResult {
  formatted: string;
  geometry: {
    lat: number;
    lng: number;
  };
}

export interface ILocation {
  results: ILocationResult[];
}
