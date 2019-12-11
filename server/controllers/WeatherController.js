import 'dotenv/config';
import api from '../services/ApiOpenWeather';
import formatSpecialChar from '../functions/formatSpecialChar';
import formatUnusedData from '../functions/formatUnusedData';
import formatWeather from '../functions/formatWeather';

export default async function WeatherController(req, res) {
  const { location, unit } = req.query;
  const formattedLocation = formatSpecialChar(location);

  const { data } = await api.get(
    `/forecast?q=${formattedLocation},BR&APPID=${process.env.APPID}&units=${unit}&cnt=17&lang=pt`
  );

  if (!data) {
    return res.status(400).json({ error: "Can't conect to weather api" });
  }

  const unusedData = formatUnusedData(data.list);
  const formattedWeather = formatWeather(unusedData, unit);
  return res.json(formattedWeather);
}
