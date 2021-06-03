import HttpClient from '../infrastructure/HttpClient';
import constants from '../constants';
import WeatherServiceAdapter from '../adapters/WeatherServiceAdapter';

interface IWeatherAPIParameters {
  lat: number | undefined;
  lon: number | undefined;
  units: string;
  lang: string;
}

export default class WeatherService {
  private url: string = constants.WEATHER_API;

  async getWeatherResume({ lat, lon, units, lang }: IWeatherAPIParameters) {
    try {
      const { data } = await HttpClient.get(
        `${this.url}data/2.5/onecall?exclude=hourly,minutely&appid=${constants.WEATHER_API_APP_ID}&lang=${lang}&units=${units}&lat=${lat}&lon=${lon}`,
      );
      return Promise.resolve(new WeatherServiceAdapter().getWeather(data));
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
