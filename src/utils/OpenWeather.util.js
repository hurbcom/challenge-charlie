
import axios from 'axios';

export default {

  async getWeather(location, units) {
    try {
      const owm = 'http://api.openweathermap.org';
      const l = `/data/2.5/weather?lang=pt&units=${units}&q=`;
      const id = '&APPID=7ba73e0eb8efe773ed08bfd0627f07b8';
      const res = await axios.get(owm + l + location + id);
      return res.data;
    } catch (e) {
      return e;
    }
  },

  async getForecast(location, units) {
    try {
      const owm = 'http://api.openweathermap.org';
      const l = `/data/2.5/forecast?lang=pt&units=${units}&cnt=40&q=`;
      const id = '&APPID=7ba73e0eb8efe773ed08bfd0627f07b8';
      const res = await axios.get(owm + l + location + id);
      return res.data;
    } catch (e) {
      return e;
    }
  },

  tempFix(temp, units) {
    return [temp.toFixed(1), (units === 'metric' ? 'ºC' : 'ºF')];
  },

  windFix(speed, units) {
    if (units === 'metric') return [(speed * 3.6).toFixed(1), 'Km/h'];
    return [speed.toFixed(1), 'mph'];
  },

  degToCardinal(deg) {
    if (deg >= 22.5 && deg < 67.5) {
      return 'NE';
    } if (deg >= 67.5 && deg < 112.5) {
      return 'E';
    } if (deg >= 112.5 && deg < 157.5) {
      return 'SE';
    } if (deg >= 157.5 && deg < 202.5) {
      return 'S';
    } if (deg >= 202.5 && deg < 247.5) {
      return 'SO';
    } if (deg >= 247.5 && deg < 292.5) {
      return 'O';
    } if (deg >= 292.5 && deg < 337.5) {
      return 'NO';
    }
    return 'N';
  },

  async getResults(location, units = 'metric') {
    const [weather] = await Promise.all([this.getWeather(location, units), this.getForecast(location, units)]);
    const today = {
      temperature: weather.main && this.tempFix(weather.main.temp, units),
      description: weather.weather && weather.weather[0] && weather.weather[0].description,
      windDeg: weather.wind && this.degToCardinal(weather.wind.deg),
      windSpeed: weather.wind && this.windFix(weather.wind.speed, units),
      humidity: weather.main && weather.main.humidity,
      pressure: weather.main && weather.main.pressure,
    };
    const tomorrow = {
      temperature: weather.main && weather.main.temp,
      description: weather.weather && weather.weather[0] && weather.weather[0].description,
      windDeg: weather.wind && weather.wind.deg,
      windSpeed: weather.wind && weather.wind.speed,
      humidity: weather.main && weather.main.humidity,
      pressure: weather.main && weather.main.pressure,
    };
    const afterTomorrow = {
      temperature: weather.main && weather.main.temp,
      description: weather.weather && weather.weather[0] && weather.weather[0].description,
      windDeg: weather.wind && weather.wind.deg,
      windSpeed: weather.wind && weather.wind.speed,
      humidity: weather.main && weather.main.humidity,
      pressure: weather.main && weather.main.pressure,
    };

    return { today, tomorrow, afterTomorrow };
  },

};
