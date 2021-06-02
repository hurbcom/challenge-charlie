import { objectToQueryString } from '../helpers/objectToQueryString';
import HttpClient from '../infrastructure/HttpClient';
import constants from '../constants';
import WeatherServiceAdapter from '../adapters/WeatherServiceAdapter';

interface IAPIParameters {
  lat: number;
  long: number;
  units: string;
  lang: string;
}

interface IWeatherPayload {}

export default class WeatherService {
  private url: string = constants.WEATHER_API;

  async getWeather({ lat, long, units, lang }: IAPIParameters): Promise<IWeatherPayload> {
    const weatherAPIParameters = {
      exclude: 'hourly,minutely',
      appid: constants.WEATHER_API_APP_ID,
      lang,
      units,
      lat,
      long,
    };

    try {
      const { data } = await HttpClient.get(
        `${this.url}/data/2.5/onecall?${objectToQueryString(weatherAPIParameters)}`,
      );
      return Promise.resolve(new WeatherServiceAdapter().getWeather(data));
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
