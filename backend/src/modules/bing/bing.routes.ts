import Router from '@koa/router'
import { Context } from 'koa'
import logger from '../../infrastructure/logger'
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
    logger.error(`Ocorreu o seguinte erro: ${error}`)
    ctx.badGateway({}, messages.unknownError)
  }
})

export default router.routes()
