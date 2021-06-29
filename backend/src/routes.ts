import { Router } from 'express'

import getResponseFromCacheIfExists from '@middlewares/getResponseFromCacheIfExists'

import BingImagesController from './controllers/BingImagesController'
import WeatherController from './controllers/WeatherController'

const routes = Router()

routes.get('/', (_, res) => res.json({ status: 'API is OK' }))

routes.use(getResponseFromCacheIfExists)

routes.get('/bing-image', BingImagesController.getImage)
routes.get('/weather-location', WeatherController.getWeatherByLocation)

export default routes
