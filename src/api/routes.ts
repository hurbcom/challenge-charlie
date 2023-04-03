import express from 'express';

import { LocalityType } from '@/types/global';
import { getLocationResults, getWeatherForecast } from '@/api/controllers/LocalityController';
import { getDailyImageUrl } from '@/api/controllers/BgImageController';
import { nextTick } from 'process';

const ApiRoutes = express.Router();

ApiRoutes.all('*', (req, res, next) => {
  if (req.method === 'POST' && !!req.body === false) {
    res.status(400).json({ message: 'No request body' });
  }
  next()
});

ApiRoutes.get('/health', (_, res) => {
  res.json({ message: 'ok' }).status(200);
});

ApiRoutes.get('/locality', async (req, res) => {
  res.json(await getLocationResults(req.query as LocalityType));
});

ApiRoutes.post('/forecast', async (req, res) => {
  res.json(await getWeatherForecast(req.query as LocalityType, req.body as {today: string}));
});

ApiRoutes.get('/backgroundImage', async (req, res) => {
  res.json(await getDailyImageUrl());
});

export default ApiRoutes;
