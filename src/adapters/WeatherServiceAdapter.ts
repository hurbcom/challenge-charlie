import { timestampToDate } from '../helpers/timestampToDate';

interface IWeatherResume {
  dt: number;
  temp: number;
  pressure: number;
  humidity: number;
  // should use this only for external api properties
  // eslint-disable-next-line camelcase
  wind_speed: number;
  description: number;
}

export default class WeatherServiceAdapter {
  private toWeather(weatherResume: IWeatherResume) {
    return {
      date: timestampToDate(weatherResume.dt),
      temp: weatherResume.temp,
      pressure: weatherResume.pressure,
      humidity: weatherResume.humidity,
      windSpeed: weatherResume.wind_speed,
      description: weatherResume.description,
    };
  }

  getWeather(payload: any) {
    const current = this.toWeather(payload.current);
    const tomorrow = this.toWeather(payload.daily[1]);
    const afterTomorrow = this.toWeather(payload.daily[2]);
    return { current, tomorrow, afterTomorrow };
  }
}
