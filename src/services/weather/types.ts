export type TWeatherTypes =
  | 'Thunderstorm'
  | 'Drizzle'
  | 'Rain'
  | 'Snow'
  | 'Atmosphere'
  | 'Clear'
  | 'Clouds';

interface IDaily {
  min: number;
  max: number;
}

export interface IForecast {
  current: {
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
}

export interface IForecastData {
  daily: Array<IForecastDaily>;
  current: IForecast['current'];
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
