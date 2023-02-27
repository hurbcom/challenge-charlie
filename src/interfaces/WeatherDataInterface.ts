export interface WeatherDataInterface {
  current?: WeatherInfo;
  weather: Weather;
  daily: DailyWeatherInfo[];
}

export interface WeatherInfo {
  temp: number;
  humidity: number;
  pressure: number;
  wind_speed: number;
}

export interface Weather {
  wind_speed: string;
}

export interface DailyWeatherInfo {
  temp: {
    day: number;
  };
}
