export interface OpenWeatherDayInfo {
  temp: number | { day: number };
  pressure: number;
  humidity: number;
  wind_deg: number;
  wind_speed: number;
  weather: {
    description: string;
    icon: string;
  };
}

export interface OpenWeatherAPIResponse {
  current: OpenWeatherDayInfo;
  daily: OpenWeatherDayInfo[];
}

export interface Weather {
  icon: string;
  pressure: number;
  humidity: number;
  temperature: number;
  description: string;
  wind: {
    speed: number;
    degrees: number;
  };
}
