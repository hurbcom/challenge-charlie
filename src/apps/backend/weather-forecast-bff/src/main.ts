/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.post('/api/location/details', async (req, res) => {
  const { latitude, longitude } = req.body;

  const locationResponse = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=c63386b4f77e46de817bdf94f552cddf&language=pt-br`
  );

  
  const { results } = await locationResponse.json();

  const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${results[0].components.city}&APPID=772920597e4ec8f00de8d376dfb3f094`);

  const weather = await weatherResponse.json() as Forecast

  const currency = results[0].annotations.currency;

  res.send({
    status: 'sucesso',
    code: 200,
    data: {
      currency: {
        name: currency.name,
        symbol: currency.symbol,
        isoCode: currency.iso_code,
      },
      address: {
        formatted: results[0].formatted,
        city: results[0].components.city
      },
      weather: {
        today: {
          title: weather.weather[0].main,
          temp: weather.main.temp,
          description: weather.weather[0].description,
          wind: weather.wind.speed,
          humidity: weather.main.humidity,
          pressure: weather.main.pressure
        },
        tomorrow: {
          title: '',
          temp: '',
          description: '',
          wind: '',
          humidity: '',
          pressure: ''
        },
        afterTomorrow: {
          title: '',
          temp: '',
          description: '',
          wind: '',
          humidity: '',
          pressure: ''
        }
      }
    }
  });
});

const port = process.env.port || 3331;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);


export interface Forecast {
  coord:      Coord;
  weather:    Weather[];
  base:       string;
  main:       Main;
  visibility: number;
  wind:       Wind;
  clouds:     Clouds;
  dt:         number;
  sys:        Sys;
  timezone:   number;
  id:         number;
  name:       string;
  cod:        number;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  temp:       number;
  feels_like: number;
  temp_min:   number;
  temp_max:   number;
  pressure:   number;
  humidity:   number;
}

export interface Sys {
  type:    number;
  id:      number;
  country: string;
  sunrise: number;
  sunset:  number;
}

export interface Weather {
  id:          number;
  main:        string;
  description: string;
  icon:        string;
}

export interface Wind {
  speed: number;
  deg:   number;
}