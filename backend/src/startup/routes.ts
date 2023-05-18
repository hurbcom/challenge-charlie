import Router from '@koa/router'
import glob from 'glob'

const routeTracking = process.env.NODE_ENV === 'production'
  ? '**/modules/**/*.routes.{ts,js}' : '**/*.routes.ts'
const routePaths = glob.sync(routeTracking)

const router = new Router({ prefix: '/api/v1' })

routePaths.forEach(async (path) => {
  const { default: routes } = await import(`../${path}`)
  router.use(routes)
})

export default () => router.routes()
