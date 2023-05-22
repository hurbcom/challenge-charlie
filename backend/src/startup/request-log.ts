import { Context, Next } from 'koa'
import logger from '../infrastructure/logger'

const getLogLevel = (status: number) => {
  if (status < 400) return 'info'
  if (status < 500) return 'warn'
  return 'error'
}

export default () => async (ctx: Context, next: Next) => {
  const startTime = new Date().getTime()

  try {
    await next()
  } catch (ex: any) {
    const error = ex.code || ex.message || 'Unknown error'
    logger.error('An internal server error occured', ex)
    ctx.internalServerError({}, error)
  }

  const elapsedTime = new Date().getTime() - startTime
  const { status } = ctx
  const logLevel = getLogLevel(status)
  const message = `${ctx.method} ${ctx.status} ${ctx.url} ${elapsedTime}ms`

  logger.log(logLevel, message)
  logger.info('---------------------------')
}
