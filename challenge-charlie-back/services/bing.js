const config = require('config');
const request = require('request');

class Bing {  
  getSpotlightImage() {
    return new Promise((resolve, reject) => {
      request(`${config.bing.domain}${config.bing.api}`, (error, response) => {
        if (error) {
          reject(error);
          return;
        }

        const body = JSON.parse(response.body);
        const background = {
          url: `${config.bing.domain}${body.images[0].url}`
        };
        resolve(background);
      });
    });
  }
}

module.exports = Bing;