var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  getLocation(
    (location) => {
      getWeatherInfo(location, weatherSuccess, weatherError);
    },
    weatherError
  );

  function weatherSuccess(weather) {
    weather = JSON.parse(weather);
    console.log('\n success -> ', weather);
    let response = {
      today: {
        temperature: weather.current_observation.condition.temperature,
        description: getCondition(weather.current_observation.condition.code),
        wind: {
          direction: degreesToCardinal(weather.current_observation.wind.direction),
          speed: weather.current_observation.wind.speed
        },
        humidity: weather.current_observation.atmosphere.humidity,
        pressure: weather.current_observation.atmosphere.pressure
      },
      tomorrow: {
        temperature: weather.forecasts[1].high
      },
      dayafter: {
        temperature: weather.forecasts[2].high
      }
    };
    res.render(
      'index',
      {
        title: 'Challange Charlie',
        weather: response 
      }
    );
  }  

  function weatherError(err) {
    console.log('\n -> ', err);
    res.render(
      'error',
      {
        message: 'Challange Charlie',
        error: {
          status: 666,
          stack: 'asdasasdads'
        }
      }
    );

  }
  
});

function getLocation(success, error) {
  success({city: 'sorocaba', region: 'sp'});
}

function getWeatherInfo({city, region}, success, error) {
  let OAuth = require('oauth');
  let request = new OAuth.OAuth(
    null,
    null,
    'dj0yJmk9djl1TlV0Ymx3dGVtJmQ9WVdrOWJXVm1NWE5STm5NbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTdi',
    '9134182aff0e14e9435615351c80b179b4a9ed1b',
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    { 'X-Yahoo-App-Id': 'mef1sQ6s' }
  );
  request.get(
    `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${city},${region}&format=json&u=c`,
    null,
    null,
    function (err, data, result) {
      if (err) {
        error(err);
        return;
      }
      success(data);
    }
  );
}

function degreesToCardinal(num) {
  var val = Math.floor((num / 22.5) + 0.5);
  var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return arr[(val % 16)];
}

function getCondition(code) {
  switch (code) {
    case 0:
      return 'Tornado';
    case 1:
      return 'Tempestade tropical';
    case 2:
      return 'Furacão';
    case 3:
      return 'Tempestade de raios severa';
    case 4:
      return 'Tempestade de raios';
    case 5:
      return 'Neve e chuva';
    case 6:
      return 'Granizo e chuva';
    case 7:
      return 'Neve e granizo';
    case 8:
      return 'Chuvisco congelante';
    case 9:
      return 'Chuvisco';
    case 10:
      return 'Chuva congelante';
    case 11:
      return 'Pancadas de chuva';
    case 12:
      return 'Chuva';
    case 13:
      return 'Flocos de neve'
    case 14:
      return 'Pancadas de neve leve';
    case 15:
      return 'Neve com vento';
    case 16:
      return 'Neve';
    case 17:
      return 'Geada';
    case 18:
      return 'Chuvisco';
    case 19:
      return 'Empoeirado'
    case 20:
      return 'Neblina';
    case 21:
      return 'Serração';
    case 22:
      return 'Esfumaçado';
    case 23:
      return 'Tesmpestuoso';
    case 24:
      return 'Ventania';
    case 25:
      return 'Frio';
    case 26:
      return 'Nublado';
    case 27:
    case 28:
    case 29:
    case 30:
      return 'Parcialmente nublado';
    case 31:
      return 'Céu limpo';
    case 32:
      return 'Ensolarado';
    case 33:
    case 34:
      return 'Bom tempo';
    case 35:
      return 'Chuva com ganizo';
    case 36:
      return 'Quente';
    case 37:
      return 'Tempestades de raios isoladas';
    case 38:
      return 'Tempestades de raios dispersas';
    case 39:
      return 'Pancadas de chuva dispersas';
    case 40:
      return 'Chuva pesada';
    case 41:
      return 'Pancadas de neve dispersas';
    case 42:
      return 'Neve pesada';
    case 43:
      return 'Nevasca';
    case 44:
      return 'Indisponível';
    case 45:
      return 'Pancadas de chuva dispersas';
    case 46:
      return 'Pancadas de neve dispersas';
    case 47:
      return 'Tempestades de raios dispersas';
    default:
      return 'Indisponível';
  }
}

module.exports = router;
