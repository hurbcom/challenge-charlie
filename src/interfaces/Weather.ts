export interface Weather {
  temperature: number;
  mood: string;
  windSpeed: number;
  windDirection: string;
  humidity: number;
  pressure: number;
  icon: string;
}

export interface WeatherForecast {
  temperature: number;
  id: number;
}
