import express from 'express';
import { getLocationResults, getWeatherForecast } from './controllers/LocalityController';
import { LocalityType } from '@/types/global';

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

export default ApiRoutes;
