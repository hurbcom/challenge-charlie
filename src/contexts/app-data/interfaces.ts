export interface IFormattedDailyWeather {
  day: string;
  weatherId: number;
  iconId: string;
  temperature: string;
  description: string;
  wind: {
    direction: string;
    speed: string;
  };
  humidity: string;
  pressure: string;
}

export interface IUserLocation {
  address?: string;
  latitude?: number;
  longitute?: number;
}
