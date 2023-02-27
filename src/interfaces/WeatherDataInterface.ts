export interface WeatherDataInterface {
  current?: WeatherInfo;
  weather: Weather;
  daily: DailyWeatherInfo[];
  afterTomorrowTempWeather: DailyWeatherInfo;
  tomorrowTempWeather: DailyWeatherInfo;
}

export interface WeatherInfo {
  temp: number;
  humidity: number;
  pressure: number;
  wind_speed: number;
  wind_deg: number;
  dt: number;
}

export interface Weather {
  wind_speed: string;
}

export interface DailyWeatherInfo {
  dt: number;
  temp: {
    day: number;
  };
}
