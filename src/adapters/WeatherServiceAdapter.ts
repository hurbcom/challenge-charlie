import { timestampToDate } from '../helpers/timestampToDate';

interface IWeatherDailyResume {
  date: string;
  temp: number;
  pressure: number;
  humidity: number;
  windSpeed: number;
  description: string;
}

export interface IWeatherDaily {
  current: IWeatherDailyResume;
  tomorrow: IWeatherDailyResume;
  afterTomorrow: IWeatherDailyResume;
}

export default class WeatherServiceAdapter {
  private toWeather(weatherResume: any): IWeatherDailyResume {
    return {
      date: timestampToDate(weatherResume.dt),
      temp: weatherResume?.temp?.day || weatherResume.temp,
      pressure: weatherResume.pressure,
      humidity: weatherResume.humidity,
      windSpeed: weatherResume.wind_speed,
      description: weatherResume.weather[0].description,
    };
  }

  getWeatherResume(payload: any): IWeatherDaily {
    const current = this.toWeather(payload.current);
    const tomorrow = this.toWeather(payload.daily[1]);
    const afterTomorrow = this.toWeather(payload.daily[2]);
    return { current, tomorrow, afterTomorrow };
  }

  getWeatherByLocationName(payload: any) {
    return {
      lat: payload.lat,
      lon: payload.lon,
      temp: payload?.main?.temp,
      pressure: payload?.main?.pressure,
      humidity: payload?.main?.humidity,
      windSpeed: payload?.wind?.speed,
      description: payload?.weather[0].description,
    };
  }
}
