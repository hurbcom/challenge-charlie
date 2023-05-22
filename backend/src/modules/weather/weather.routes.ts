import Router from '@koa/router'
import { Context } from 'koa'
import messages from '../../infrastructure/messages'
import validateRequest from '../../infrastructure/validate-request'
import { getLocationSchema, getWeatherSchema } from './weather..validation'
import service from './weather.service'
import { LocationRequest } from './weather.types'

const router = new Router({ prefix: '/weather' })

router.get('/location-by-lat-lng', validateRequest(getLocationSchema), async (ctx: Context) => {
  /*
    #swagger.tags = ['Weather']
    #swagger.parameters['data'] = { in: 'query', schema: { $ref: '#definitions/getLocationSchema' } }
  */
  try {
    const { latitude, longitude } = <LocationRequest>(ctx.request.query as unknown)
    const { data } = await service.getCityByLatitudeAndLongitude(latitude, longitude)
    ctx.oK(data, messages.empty)
  } catch (error) {
    ctx.badGateway({}, messages.unknownError)
  }
})

router.get('/forecast', validateRequest(getWeatherSchema), async (ctx: Context) => {
  /*
    #swagger.tags = ['Weather']
    #swagger.parameters['data'] = { in: 'query', schema: { $ref: '#definitions/getWeatherSchema' } }
  */
  try {
    const { city } = <{ city: string }>(ctx.request.query)
    const { data } = await service.getByCity(city)
    ctx.oK(data, messages.empty)
  } catch (error) {
    ctx.badGateway({}, messages.unknownError)
  }
})

export default router.routes()
