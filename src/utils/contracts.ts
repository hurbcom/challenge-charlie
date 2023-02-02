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
  };

  export type WeatherForecastResult = {
    list: WeatherObjectResult[];
  };
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
