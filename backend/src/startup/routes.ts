import Router from '@koa/router'
import glob from 'glob'

const isProduction = process.env.NODE_ENV === 'production'

const routeTracking = isProduction ? '**/modules/**/*.routes.{ts,js}' : '**/*.routes.ts'
const routePaths = glob.sync(routeTracking)

const router = new Router({ prefix: '/api/v1' })

routePaths.forEach(async (path) => {
  const prefix = isProduction ? '../' : '../../'
  const { default: routes } = await import(prefix + path)
  router.use(routes)
})

export default () => router.routes()
