import axios from 'axios';
import config from '../../../config';

export default class OpenWeatherService {
  constructor() {
    this.key = config.openWeatherKey;
  }
  
  async findWeather(queryText, units='metric') {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${queryText}&units=${units}&APPID=${this.key}`;
      const response = await axios.get(url);
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getWeatherByCoord(latitude, longitude) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&APPID=${this.key}`;
      const response = await axios.get(url);
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}