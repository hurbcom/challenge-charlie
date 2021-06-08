interface IWeatherWeeklyItem {
  date: number;
  temperature: number;
  pressure: number;
  humidity: number;
  windSpeed: number;
  description: string;
  id: number;
}

export interface IWeatherWeekly {
  today: IWeatherWeeklyItem;
  days: IWeatherWeeklyItem[];
}

export default class WeatherServiceAdapter {
  private toWeather(weatherResume: any): IWeatherWeeklyItem {
    return {
      date: weatherResume.dt,
      id: weatherResume.weather[0].id,
      temperature: weatherResume?.temp?.day || weatherResume.temp,
      pressure: weatherResume.pressure,
      humidity: weatherResume.humidity,
      windSpeed: weatherResume.wind_speed,
      description: weatherResume.weather[0].description,
    };
  }

  getWeatherResume(payload: any): IWeatherWeekly {
    const current = this.toWeather(payload.current);
    const tomorrow = this.toWeather(payload.daily[1]);
    const afterTomorrow = this.toWeather(payload.daily[2]);
    return { today: current, days: [tomorrow, afterTomorrow] };
  }

  getWeatherByLocationName(payload: any) {
    return {
      lat: payload.coord.lat,
      lon: payload.coord.lon,
      temperature: payload?.main?.temp,
      pressure: payload?.main?.pressure,
      humidity: payload?.main?.humidity,
      windSpeed: payload?.wind?.speed,
      description: payload?.weather[0].description,
    };
  }
}
