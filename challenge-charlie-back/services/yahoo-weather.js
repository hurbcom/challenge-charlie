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
        try {
          data = JSON.parse(data);
  
          const todayWeather = this.filterWeatherInfo(data.forecasts[0], "Hoje", data.current_observation);
          const tomorrowWeather = this.filterWeatherInfo(data.forecasts[1], "Amanhã");
          const afterTomorrowWeather = this.filterWeatherInfo(data.forecasts[2], "Depois de amanhã");
  
          const response = {
            location: data.location,
            weathers: [ todayWeather, tomorrowWeather, afterTomorrowWeather ]
          }
  
          resolve(response);
        }
        catch (err) {
          reject(err);
        }
      });
    });
  }

  filterWeatherInfo(forecast, date, current_observation) {
    return {
      date,
      actualTemperature: {
        celsius: current_observation != null ? current_observation.condition.temperature : null
      },
      minTemperature: {
        celsius: forecast.low
      },
      maxTemperature: {
        celsius: forecast.high
      },
      text: weatherHelper.getWeatherCondition(forecast.code),
      icon: weatherHelper.getWeatherConditionIcon(forecast.code),
      wind: {
        direction: current_observation != null ? weatherHelper.getCardinalDirection(current_observation.wind.direction) : null,
        speed: current_observation != null ? current_observation.wind.speed : null
      },
      humidity: current_observation != null ? current_observation.atmosphere.humidity : null,
      pressure: current_observation != null ? current_observation.atmosphere.pressure : null
    }
  }
}

module.exports = YahooWeather;