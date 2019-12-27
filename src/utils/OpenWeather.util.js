
import axios from 'axios';

export default {

  async getWeather(location) {
    try {
      const owm = 'http://api.openweathermap.org';
      const l = '/data/2.5/weather?lang=pt&units=metric&q=';
      const id = '&APPID=7ba73e0eb8efe773ed08bfd0627f07b8';
      const res = await axios.get(owm + l + location + id);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },

  async getForecast(location) {
    try {
      const owm = 'http://api.openweathermap.org';
      const l = '/data/2.5/forecast?lang=pt&units=metric&cnt=40&q=';
      const id = '&APPID=7ba73e0eb8efe773ed08bfd0627f07b8';
      const res = await axios.get(owm + l + location + id);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },

  mpsToKmph(mps) {
    return (mps * 3.6).toFixed(2);
  },

  degToCardinal(deg) {
    if (deg >= 22.5 && deg < 67.5){
      return 'NE';
    } else if (deg >= 67.5 && deg < 112.5){
      return 'E';
    } else if (deg >= 112.5 && deg < 157.5){
      return 'SE';
    } else if (deg >= 157.5 && deg < 202.5){
      return 'S';
    } else if (deg >= 202.5 && deg < 247.5){
      return 'SO';
    } else if (deg >= 247.5 && deg < 292.5){
      return 'O';
    } else if (deg >= 292.5 && deg < 337.5){
      return 'NO';
    } else {
      return 'N';
    }
  },

  async getResults(location) {
    const [weather] = await Promise.all([this.getWeather(location), this.getForecast(location)]);
    console.log(weather)
    const today = {
      temperature: weather.main && weather.main.temp,
      description: weather.weather && weather.weather[0] && weather.weather[0].description,
      windDeg: weather.wind && this.degToCardinal(weather.wind.deg),
      windSpeed: weather.wind && this.mpsToKmph(weather.wind.speed),
      humidity: weather.main && weather.main.humidity,
      pressure: weather.main && weather.main.pressure
    };
    const tomorrow = {
      temperature: weather.main && weather.main.temp,
      description: weather.weather && weather.weather[0] && weather.weather[0].description,
      windDeg: weather.wind && weather.wind.deg,
      windSpeed: weather.wind && weather.wind.speed,
      humidity: weather.main && weather.main.humidity,
      pressure: weather.main && weather.main.pressure
    };
    const afterTomorrow = {
      temperature: weather.main && weather.main.temp,
      description: weather.weather && weather.weather[0] && weather.weather[0].description,
      windDeg: weather.wind && weather.wind.deg,
      windSpeed: weather.wind && weather.wind.speed,
      humidity: weather.main && weather.main.humidity,
      pressure: weather.main && weather.main.pressure
    };

    return {today, tomorrow, afterTomorrow};
  },

}