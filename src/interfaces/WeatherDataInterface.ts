export interface WeatherDataInterface {
  main?: WeatherMainInfo;
  weather: Weather[];
  wind: Wind;
}

export interface WeatherMainInfo {
  temp: number;
  humidity: number;
  pressure: number;
}

export interface Weather {
  main: string;
}

export interface Wind {
  speed: number;
}

export interface GeoLocation {
  latitude: number;
  longitude: number;
}
