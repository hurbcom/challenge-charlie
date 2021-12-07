interface WeatherProps {
  id: number;
  main: string;
  icon: string;
  description: string;
}

interface TempProps {
  day: number;
}

interface DailyWeatherDataProps {
  temp: TempProps;
  wind_speed: number;
  humidity: number;
  pressure: number;
  weather: WeatherProps[];
}

interface WeatherDataProps {
  temp: number;
  wind_speed: number;
  humidity: number;
  pressure: number;
  weather: WeatherProps[];
}

interface ForecastProps {
  lat?: number;
  lon?: number;
  timezone?: string;
  timezone_offset?: number;
  current?: WeatherDataProps;
  daily?: DailyWeatherDataProps[];
}

export default ForecastProps;
