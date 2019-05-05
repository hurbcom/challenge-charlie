const config = require('config');
const OAuth = require('oauth');

class YahooWeather {
  constructor() {
    const header = { 'X-Yahoo-App-Id': config.yahoo_weather.app_id };
    this.request = new OAuth.OAuth(null, null, config.yahoo_weather.consumer_key, config.yahoo_weather.consumer_secret, '1.0', null, 'HMAC-SHA1', null, header);
  }
  
  getWeather() {
    return new Promise((resolve, reject) => {
      this.request.get(`${config.yahoo_weather.url}?location=sunnyvale,ca&format=json`, null, null, (err, data) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(data);
      });
    });
  }
}

module.exports = YahooWeather;