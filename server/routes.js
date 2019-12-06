import { Router } from 'express';
import axios from 'axios';
import formatWeather from './services/formatWeather';

const routes = new Router();

routes.get('/wallpaper', async (req, res) => {
  const { data } = await axios.get(
    'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR'
  );
  const urlWallpaper = `url('https://www.bing.com${data.images[0].url}')`;
  return res.json(urlWallpaper);
});

routes.get('/geo-location', async (req, res) => {
  const { latitude, longitude } = req.query;
  const { data } = await axios.get(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=c63386b4f77e46de817bdf94f552cddf&language=pt`
  );
  const { state, country } = data.results[0].components;
  return res.json({ state, country });
});

routes.get('/weather', async (req, res) => {
  const { location, unit } = req.query;
  const { data } = await axios.get(
    `http://api.openweathermap.org/data/2.5/forecast?q=${location},BR&APPID=7ba73e0eb8efe773ed08bfd0627f07b8&units=${unit}&cnt=17&lang=pt`
  );
  const response = formatWeather(data.list);
  return res.json(response);
});

export default routes;
