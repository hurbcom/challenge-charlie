const config = require('config');
const OAuth = require('oauth');
const weatherHelper = require('../helpers/weather');

class YahooWeather {
  constructor() {
    const header = { 'X-Yahoo-App-Id': config.yahoo_weather.app_id };
    this.request = new OAuth.OAuth(null, null, config.yahoo_weather.consumer_key, config.yahoo_weather.consumer_secret, '1.0', null, 'HMAC-SHA1', null, header);
  }
  
  getWeather(query) {
    let queryString = "format=json&u=c";
    Object.keys(query).forEach(key => queryString += `&${key}=${query[key]}`);

    return new Promise((resolve, reject) => {
      this.request.get(`${config.yahoo_weather.url}?${queryString}`, null, null, (err, data) => {
        if (err) {
          reject(err);
          return;
        }

        const todayForecast = {
          date: "Hoje",
          temperature: {
            celsius: data.current_observation.condition.temperature
          },
          text: weatherHelper.getWeatherCondition(data.current_observation.condition.code),
          wind: {
            direction: weatherHelper.getCardinalDirection(data.current_observation.direction),
            speed: data.current_observation.speed
          },
          humidity: data.current_observation.atmosphere.humidity,
          pressure: data.current_observation.atmosphere.pressure
        };
        
        const tomorrowForecast = {
          date: "Amanhã",
          temperature: {
            celsius: forecasts[0].high
          },
          text: weatherHelper.getWeatherCondition(forecasts[0].code)
        };
        
        const afterTomorrowForecast = {
          date: "Depois de amanhã",
          temperature: {
            celsius: forecasts[1].high
          },
          text: weatherHelper.getWeatherCondition(forecasts[1].code)
        };

        resolve([todayForecast, tomorrowForecast, afterTomorrowForecast]);
      });
    });
  }
}

module.exports = YahooWeather;