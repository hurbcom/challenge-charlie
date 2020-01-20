import axios from 'axios';
import config from '../../../config';

export default class OpenWeatherService {
  constructor() {
    this.key = config.openWeatherKey;
  }
  
  findWeather(queryText) {
    //@TODO fazer tratamento de erros
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${queryText}&units=metric&APPID=${this.key}`;
    return axios.get(url).then(response => response.data);
  }

  getWeatherByCoord(latitude, longitude) {
    //@TODO fazer tratamento de erros
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&APPID=${this.key}`;
    return axios.get(url).then(response => response.data);
  }
}