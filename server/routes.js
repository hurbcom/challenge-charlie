import { Router } from 'express';

import WallpaperController from './controllers/WallpaperController';
import GeoLocationController from './controllers/GeoLocationController';
import BrazilStatesController from './controllers/BrazilStatesController';
import WeatherController from './controllers/WeatherController';

const routes = new Router();

routes.get('/wallpaper', WallpaperController);
routes.get('/geo-location', GeoLocationController);
routes.get('/states', BrazilStatesController);
routes.get('/weather', WeatherController);

export default routes;
