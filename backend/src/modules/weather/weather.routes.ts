import Router from '@koa/router'
import { Context } from 'koa'
import messages from '../../infrastructure/messages'
import service from './weather.service'

const router = new Router({ prefix: '/weather' })

router.get('/location-by-lat-lng', async (ctx: Context) => {
  /*
    #swagger.tags = ['Weather']
  */
  try {
    const { latitude, longitude } = <{ latitude: number, longitude: number }>(ctx.request.query as unknown)
    const { data } = await service.getCityByLatitudeAndLongitude(latitude, longitude)
    ctx.oK(data, messages.empty)
  } catch (error) {
    ctx.badGateway({}, messages.unknownError)
  }
})

router.get('/forecast', async (ctx: Context) => {
  /*
    #swagger.tags = ['Weather']
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
