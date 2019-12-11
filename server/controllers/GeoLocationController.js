import api from '../services/ApiOpenCage';
import 'dotenv/config';

export default async function GeoLocationController(req, res) {
  const { latitude, longitude } = req.query;

  const { data } = await api.get(
    `json?q=${latitude},${longitude}&key=${process.env.CAGE_KEY}&language=pt`
  );

  if (!data) {
    return res.status(400).json({ error: "Can't conect to GeoLocation api" });
  }

  const { state } = data.results[0].components;

  return res.json(state);
}
