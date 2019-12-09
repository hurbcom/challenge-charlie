import api from '../services/ApiIbgeStates';

export default async function BrazilStatesController(req, res) {
  const { data } = await api.get();

  return res.json(data);
}
