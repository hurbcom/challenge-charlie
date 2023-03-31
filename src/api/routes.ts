import express from 'express';
const ApiRoutes = express.Router();

ApiRoutes.get('/health', (req, res) => {
  res.json({ message: 'ok' }).status(200);
});

export default ApiRoutes;
