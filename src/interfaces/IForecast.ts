export interface IForecastDailyRaw {
  dt: number;
  temp: {
    max: number;
    min: number;
  };
}

export interface IForecastRaw {
  daily: IForecastDailyRaw[];
}

export interface IForecast {
  max: number;
  min: number;
  dayAfter: number;
}
