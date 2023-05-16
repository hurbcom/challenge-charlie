import app from './app'
import loadEnv from './load-env'
import logger from '../infrastructure/logger'
import swaggerDoc from './swagger-doc'

async function startServer(): Promise<void> {
  await loadEnv()

  const port = process.env.PORT || 1234
  const host = `localhost:${port}`

  await swaggerDoc(host)
  app.listen(port)

  logger.info('---------------------------')
  logger.info('Server has started!  🚀')
  logger.info('---------------------------')
  logger.info(`Listening port: http://${host}/`)
  logger.info(`Documentation: http://${host}/docs`)
  logger.info('---------------------------')
}

export default startServer
