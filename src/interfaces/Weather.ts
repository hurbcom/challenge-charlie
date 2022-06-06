export interface Weather {
  temperature: number;
  mood: string;
  windSpeed: number;
  windDirection: string;
  humidity: number;
  pressure: number;
}

export type WeatherForecast = Pick<Weather, "temperature">;
