export type TWeatherTypes =
  | 'Thunderstorm'
  | 'Drizzle'
  | 'Rain'
  | 'Snow'
  | 'Atmosphere'
  | 'Mist'
  | 'Clear'
  | 'Clouds';

interface IDaily {
  min: number;
  max: number;
  weatherType: TWeatherTypes;
}

export interface IWeatherData {
  weather: Array<{
    description: string;
    main: TWeatherTypes;
  }>;
  temp: number;
  humidity: number;
  pressure: number;
  wind_speed: number;
  coord: {
    lat: number;
    lon: number;
  };
}

export interface IForecast {
  current?: {
    temperature: number;
    weather: string;
    weatherType: TWeatherTypes;
    wind: number;
    humidity: number;
    pressure: number;
  };
  otherDays: Array<IDaily>;
}

export interface IForecastDaily {
  temp: {
    max: number;
    min: number;
  };
  weather: Array<{
    main: TWeatherTypes;
  }>;
}

export interface IForecastData {
  daily: Array<IForecastDaily>;
  current: IWeatherData;
}

export interface IWeatheData {
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
}

export interface IWeather extends IForecast {
  name: string;
}
