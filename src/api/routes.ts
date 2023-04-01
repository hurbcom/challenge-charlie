import express from 'express';
import OpenCageService, { LocalityType } from '@/api/services/OpenCagesService';

const ApiRoutes = express.Router();

ApiRoutes.get('/health', (req, res) => {
  res.json({ message: 'ok' }).status(200);
});

ApiRoutes.get('/locality', async (req, res) => {
  // TODO: move logics into controller
  const openCageService = new OpenCageService();
  const { latitude, longitude } = req.query;
  res.json(await openCageService.retrieveLocation({ latitude, longitude } as LocalityType));
});

export default ApiRoutes;
