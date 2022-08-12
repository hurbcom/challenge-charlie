export interface IDailyWeatherData {
  daily: [
    {
      temp: {
        day: number;
        max: number;
        min: number;
      };
      wind_deg: number;
      wind_speed: number;
      humidity: number;
      pressure: number;
      weather: [
        {
          id: number;
          icon: string;
          description: string;
        },
      ];
    },
  ];
  current: {
    temp: number;
    wind_deg: number;
    wind_speed: number;
    humidity: number;
    pressure: number;
    weather: [
      {
        id: number;
        icon: string;
        description: string;
      },
    ];
  };
}

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
