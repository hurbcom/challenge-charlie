import api from '../services/ApiIbgeStates';

export default async function BrazilStatesController(req, res) {
  try {
    const { data } = await api.get();
    return res.json(data);
  } catch (err) {
    return res.status(400).json({ error: err });
  }
}
