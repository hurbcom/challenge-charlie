import { IForecast, IForecastData, IWeatheData } from './types';

export const forecastSerialize = (response: IForecastData) => {
  const daily = response.daily.slice(0, 2).map(day => ({
    max: day.temp.max,
    min: day.temp.min,
    weatherType: day.weather[0].main,
  }));

  return {
    current: {
      humidity: response.current?.humidity,
      temperature: response.current?.temp,
      pressure: response.current?.pressure,
      weatherType: response.current?.weather[0].main,
      weather: response.current?.weather[0].description,
      wind: response.current?.wind_speed,
    },
    otherDays: daily,
  };
};

export const weatherSerialize = (forecast: IForecast, data: IWeatheData) => ({
  ...forecast,
  name: data.name,
});
