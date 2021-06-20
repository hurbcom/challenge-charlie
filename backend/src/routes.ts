import { Router } from 'express'

import BingImagesController from './controllers/BingImagesController'

const routes = Router()

routes.get('/', (_, res) => res.json({ status: 'API is OK' }))

routes.get('/bing-image', BingImagesController.getImage)

export default routes
