import api from '../services/ApiOpenCage';
import 'dotenv/config';

export default async function GeoLocationController(req, res) {
  const { latitude, longitude } = req.query;
  const { data } = await api.get(
    `json?q=${latitude},${longitude}&key=${process.env.CAGE_KEY}&language=pt`
  );
  const { state, country } = data.results[0].components;
  return res.json({ state, country });
}
