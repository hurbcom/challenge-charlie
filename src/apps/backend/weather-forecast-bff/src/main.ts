/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const openCageDataCache = {};

const openWeatherMapCache = {};

app.post('/api/location/details/coordinates', async (req, res) => {
  const { latitude, longitude } = req.body;

  const cacheKey = `${latitude}:${longitude}`;

  if (!openCageDataCache[cacheKey]) {
    const locationResponse = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=a0f1a844dd9c455182b5b8d3e33e0839&language=pt-br`
    );      

    const { results, ...others } = await locationResponse.json();
    console.log('🚀 ~ file: main.ts:32 ~ app.post ~ results', results, others);

    if (results.length === 0) {
      res.status(400).send({
        status: 'local não encontrado',
        code: 400,
        data: {},
      });

      return;
    }

    openCageDataCache[cacheKey] = results[0];
  } else {
    console.log(`[POST] - opencagedata - /details/coordinates - returning from cache (${cacheKey})`);
  }

  if (!openWeatherMapCache[cacheKey]) {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&lang=pt_br&units=metric&appid=f7582f1c0659a741e71ecb5e18f11497`;

    const weatherResponse = await fetch(url);

    const { daily } = await weatherResponse.json();

    openWeatherMapCache[cacheKey] = daily;
  } else {
    console.log(`[POST] openweathermap - /details/coordinates - returning from cache (${cacheKey})`);
  }

  const [today, tomorrow, afterTomorrow] = openWeatherMapCache[cacheKey];

  const currency = openCageDataCache[cacheKey].annotations.currency;

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
        formatted: openCageDataCache[cacheKey].formatted,
        city: openCageDataCache[cacheKey].components.city,
      },
      weather: {
        today: {
          title: today.weather[0].main,
          temp: Math.round(today.temp.max),
          description: today.weather[0].description,
          wind: Number.parseFloat(today.wind_speed).toFixed(1),
          humidity: today.humidity,
          pressure: today.pressure,
          icon: today.weather[0].icon,
        },
        tomorrow: {
          title: tomorrow.weather[0].main,
          temp: Math.round(tomorrow.temp.max),
          description: tomorrow.weather[0].description,
          wind: Number.parseFloat(tomorrow.wind_speed).toFixed(1),
          humidity: tomorrow.humidity,
          pressure: tomorrow.pressure,
          icon: tomorrow.weather[0].icon,
        },
        afterTomorrow: {
          title: afterTomorrow.weather[0].main,
          temp: Math.round(afterTomorrow.temp.max),
          description: afterTomorrow.weather[0].description,
          wind: Number.parseFloat(afterTomorrow.wind_speed).toFixed(1),
          humidity: afterTomorrow.humidity,
          pressure: afterTomorrow.pressure,
          icon: afterTomorrow.weather[0].icon,
        },
      },
    },
  });
});

app.post('/api/location/details/address', async (req, res) => {
  const { address } = req.body;

  if (!openCageDataCache[address]) {
    const locationResponse = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${address}&key=a0f1a844dd9c455182b5b8d3e33e0839&language=pt-br`
    );

    const { results } = await locationResponse.json();

    if (results.length === 0) {
      res.status(400).send({
        status: 'local não encontrado',
        code: 400,
        data: {},
      });

      return;
    }

    openCageDataCache[address] = results[0];
  } else {
    console.log(`[POST] - opencagedata - /details/address - returning from cache (${address})`);
  }

  const { lat, lng } = openCageDataCache[address].geometry;

  const cacheKey = `${lat}:${lng}`;

  if (!openWeatherMapCache[cacheKey]) {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly,alerts&lang=pt_br&units=metric&appid=f7582f1c0659a741e71ecb5e18f11497`;

    const weatherResponse = await fetch(url);

    const { daily } = await weatherResponse.json();

    openWeatherMapCache[cacheKey] = daily;
  } else {
    console.log(`[POST] - openweathermap - /details/address - returning from cache (${cacheKey})`);
  }

  const [today, tomorrow, afterTomorrow] = openWeatherMapCache[cacheKey];

  const currency = openCageDataCache[address].annotations.currency;

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
        formatted: openCageDataCache[address].formatted,
        city: openCageDataCache[address].components.city,
      },
      weather: {
        today: {
          title: today.weather[0].main,
          temp: Math.round(today.temp.max),
          description: today.weather[0].description,
          wind: Number.parseFloat(today.wind_speed).toFixed(1),
          humidity: today.humidity,
          pressure: today.pressure,
          icon: today.weather[0].icon,
        },
        tomorrow: {
          title: tomorrow.weather[0].main,
          temp: Math.round(tomorrow.temp.max),
          description: tomorrow.weather[0].description,
          wind: Number.parseFloat(tomorrow.wind_speed).toFixed(1),
          humidity: tomorrow.humidity,
          pressure: tomorrow.pressure,
          icon: tomorrow.weather[0].icon,
        },
        afterTomorrow: {
          title: afterTomorrow.weather[0].main,
          temp: Math.round(afterTomorrow.temp.max),
          description: afterTomorrow.weather[0].description,
          wind: Number.parseFloat(afterTomorrow.wind_speed).toFixed(1),
          humidity: afterTomorrow.humidity,
          pressure: afterTomorrow.pressure,
          icon: afterTomorrow.weather[0].icon,
        },
      },
    },
  });
});

const port = process.env.port || 3331;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

export interface Forecast {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
}
