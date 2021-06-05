import HttpClient from '../infrastructure/HttpClient';
import constants from '../constants';
import WeatherServiceAdapter from '../adapters/WeatherServiceAdapter';

interface IWeatherResumeRequestParameters {
  lat: number | undefined;
  lon: number | undefined;
  units: string;
  lang: string;
}

interface IWeatherByLocationNameRequestParameters {
  units?: string;
  lang?: string;
  location: string;
}

export default class WeatherService {
  private url: string = constants.WEATHER_API;

  async getWeatherResume({ lat, lon, units, lang }: IWeatherResumeRequestParameters) {
    try {
      const { data } = await HttpClient.get(
        `${this.url}data/2.5/onecall?exclude=hourly,minutely&appid=${constants.WEATHER_API_APP_ID}&lang=${lang}&units=${units}&lat=${lat}&lon=${lon}`,
      );
      return Promise.resolve(new WeatherServiceAdapter().getWeatherResume(data));
    } catch (e) {
      return Promise.reject(e);
    }
  }

  async getWeatherByLocationName({
    location,
    lang = 'pt_br',
    units = 'metric',
  }: IWeatherByLocationNameRequestParameters) {
    try {
      const { data } = await HttpClient.get(
        `${this.url}data/2.5/weather?appid=${constants.WEATHER_API_APP_ID}&lang=${lang}&units=${units}&q=${location}`,
      );
      return Promise.resolve(new WeatherServiceAdapter().getWeatherByLocationName(data));
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
