
import axios from 'axios';

export default {

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

  filterForecast(forecast) {
    const max = (arr) => arr.reduce((prev, curr) => prev.main.temp > curr.main.temp ? prev : curr);
    const list1 = forecast.slice(1, 9);
    const list2 = forecast.slice(9);
    return [max(list1), max(list2)];
  },

  genWeather(weather, units) {
    return {
      temperature: weather.main && this.tempFix(weather.main.temp, units),
      description: weather.weather && weather.weather[0] && weather.weather[0].description,
      condCode: weather.weather && weather.weather[0] && weather.weather[0].id,
      windDeg: weather.wind && this.degToCardinal(weather.wind.deg),
      windSpeed: weather.wind && this.windFix(weather.wind.speed, units),
      humidity: weather.main && weather.main.humidity,
      pressure: weather.main && weather.main.pressure,
    };
  },

  async getWeather(query) {
    try {
      const api = 'http://api.openweathermap.org';
      const id = '&APPID=7ba73e0eb8efe773ed08bfd0627f07b8';
      const res = await axios.get(api + query + id);
      return res.data;
    } catch (e) {
      return e;
    }
  },

  async getResults(search, units = 'metric') {
    const weatherQuery = `/data/2.5/weather?lang=pt&q=${search}&units=${units}`;
    const forecastQuery = `/data/2.5/forecast?lang=pt&cnt=17&q=${search}&units=${units}`;
    const [weather, forecast] = await Promise.all([this.getWeather(weatherQuery), this.getWeather(forecastQuery)]);
    if (weather instanceof Error) return;
    const fc = this.filterForecast(forecast.list);
    const location = weather.name + ', ' + (weather.sys && weather.sys.country);
    const today = this.genWeather(weather, units);
    const tomorrow = this.genWeather(fc[0], units);
    const afterTomorrow = this.genWeather(fc[1], units);
    return [location, { today, tomorrow, afterTomorrow }];
  },

};
