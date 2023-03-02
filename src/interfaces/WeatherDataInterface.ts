export interface WeatherDataInterface {
  loading: boolean;
  current?: WeatherInfo;
  daily: {
    tomorrowTempWeather: NextDayWeatherInfo;
    afterTomorrowTempWeather: NextDayWeatherInfo;
  };
}

export interface WeatherInfo {
  dt: number;
  temp: number;
  humidity: number;
  pressure: number;
  wind_speed: number;
  wind_deg: number;
  weather: Weather[];
}

export interface Weather {
  main: string;
  icon: string;
  description: string;
}

export interface DailyWeatherInfo {
  tomorrowTempWeather: DailyWeatherInfo;
  afterTomorrowTempWeather: DailyWeatherInfo;
}
export interface NextDayWeatherInfo {
  dt: number;
  temp: {
    day: number;
  };
}
