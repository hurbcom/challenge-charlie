import express from 'express';

import { LocalityType } from '@/types/global';
import { getLocationResults, getWeatherForecast } from '@/api/controllers/LocalityController';
import { getDailyImageUrl } from '@/api/controllers/BgImageController';

const ApiRoutes = express.Router();

ApiRoutes.get('/health', (_, res) => {
  res.json({ message: 'ok' }).status(200);
});

ApiRoutes.get('/locality', async (req, res) => {
  res.json(await getLocationResults(req.query as LocalityType));
});

ApiRoutes.get('/forecast', async (req, res) => {
  res.json(await getWeatherForecast(req.query as LocalityType));
});

ApiRoutes.get('/backgroundImage', async (req, res) => {
  res.json(await getDailyImageUrl());
});

export default ApiRoutes;
