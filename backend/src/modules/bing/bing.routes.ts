import Router from '@koa/router'
import { Context } from 'koa'
import messages from '../../infrastructure/messages'
import service from './bing.service'

const router = new Router({ prefix: '/bing' })

router.get('/', async (ctx: Context) => {
  /*
    #swagger.tags = ['Bing']
  */
  try {
    const { data } = await service.getBingImageOfTheDay()
    ctx.set('Content-Type', 'image/jpeg')
    ctx.body = data
  } catch (error) {
    ctx.badGateway({}, messages.unknownError)
  }
})

export default router.routes()
