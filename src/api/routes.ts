import express from 'express';
import dayjs from 'dayjs';

import { getLocationResults, getWeatherForecast } from '@/api/controllers/LocalityController';
import { getDailyImageUrl } from '@/api/controllers/BgImageController';

import { WeatherForecastParams, LocationResultsParams } from '@/types/params';

const ApiRoutes = express.Router();

ApiRoutes.all('*', (req, res, next) => {
  if (req.method === 'POST' && !!req.body === false) {
    res.status(400).json({ message: 'No request body' });
  }
  next();
});

ApiRoutes.get('/health', (_, res) => {
  res.json({ message: 'ok' }).status(200);
});

ApiRoutes.get('/locality', async (req, res) => {
  req.query = {
    latitude: req.query.latitude || '0',
    longitude: req.query.longitude || '0',
    ...req.query,
  };
  res.json(await getLocationResults(req.query as LocationResultsParams));
});

ApiRoutes.post('/forecast', async (req, res) => {
  req.query = {
    latitude: req.query.latitude || '0',
    longitude: req.query.longitude || '0',
    browserDate: req.query.browserDate || dayjs().format('YYYY-MM-DD'),
    count: req.query.cnt || '2',
    ...req.query,
  };
  res.json(await getWeatherForecast(req.query as WeatherForecastParams));
});

ApiRoutes.get('/backgroundImage', async (req, res) => {
  res.json(await getDailyImageUrl());
});

export default ApiRoutes;
