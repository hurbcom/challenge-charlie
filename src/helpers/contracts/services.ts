import { WeatherInformation } from '../models';

export namespace IGetCurrentWeatherByCity {
  export type Params = {
    cityName: string;
  };
  export type Result = WeatherInformation | null;
}

export namespace IGetWeatherNextDaysByCity {
  export type Params = {
    cityName: string;
  };
  export type Result = WeatherInformation[] | null;
}
