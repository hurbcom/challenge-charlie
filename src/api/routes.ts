import express from 'express';
import OpenCageService from '@/api/services/OpenCagesService';
import { LocalityType } from '@/types/global';

const ApiRoutes = express.Router();

ApiRoutes.get('/health', (_, res) => {
  res.json({ message: 'ok' }).status(200);
});

ApiRoutes.get('/locality', async (req, res) => {
  res.json(await new OpenCageService(req.query as LocalityType).retrieveLocation());
});

export default ApiRoutes;
