import { timestampToDate } from '../helpers/timestampToDate';

interface IWeatherResume {
  date: string;
  temp: number;
  pressure: number;
  humidity: number;
  windSpeed: number;
  description: number;
}

export default class WeatherServiceAdapter {
  private toWeather(weatherResume: any): IWeatherResume {
    return {
      date: timestampToDate(weatherResume.dt),
      temp: weatherResume?.temp?.day?.toFixed(2) || weatherResume.temp.toFixed(2),
      pressure: weatherResume.pressure,
      humidity: weatherResume.humidity,
      windSpeed: weatherResume.windSpeed,
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
