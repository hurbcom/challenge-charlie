import cors from '@koa/cors'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import requestLog from './request-log'
import response from './response'
import routes from './routes'
import swaggerUi from './swagger-ui'

const app = new Koa()
  .use(cors())
  .use(bodyParser())
  .use(requestLog())
  .use(response())
  .use(routes())

if (process.env.NODE_ENV !== 'test') { app.use(swaggerUi()) }

export default app
