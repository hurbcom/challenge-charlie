export namespace OpenWeatherApi {
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

export namespace OpenCageApi {
  export type CityByCoordinatesResult = {
    results: Array<{
      components: {
        city: string;
        state: string;
      };
    }>;
  };
}
