export namespace IOpenWeatherApi {
  export type WeatherObjectResult = {
    weather: [
      {
        description: string;
        icon: string;
      }
    ];
    main: {
      temp: number;
      pressure: number;
      humidity: number;
    };
    wind: {
      speed: number;
      deg: number;
    };
    dt: number;
    dt_txt: string;
  };

  export type WeatherForecastResult = {
    list: WeatherObjectResult[];
  };

  export enum ServiceType {
    WEATHER = 'weather',
    FORECAST = 'forecast',
  }
}
