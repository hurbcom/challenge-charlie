import api from '../services/ApiIbgeStates';

export default async function BrazilStatesController(req, res) {
  try {
    const { data } = await api.get();
    const formattedData = [];
    data.forEach(item => formattedData.push({ id: item.id, state: item.nome }));
    return res.json(formattedData);
  } catch (err) {
    return res.status(400).json({ error: err });
  }
}
