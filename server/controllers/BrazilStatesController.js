import api from '../services/ApiIbgeStates';

export default async function BrazilStatesController(req, res) {
  const formattedData = [];

  const { data } = await api.get();

  if (!data) {
    return res.status(400).json({ error: "Can't conect to IBGE api" });
  }

  data.forEach(item => formattedData.push({ id: item.id, state: item.nome }));

  return res.json(formattedData);
}
