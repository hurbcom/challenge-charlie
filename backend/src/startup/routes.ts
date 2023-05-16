import Router from '@koa/router'
import glob from 'glob'

const routePaths = glob.sync('**/*.routes.ts')

const router = new Router({ prefix: '/api/v1' })

routePaths.forEach(async (path) => {
  const { default: routes } = await import(`../../${path}`)
  router.use(routes)
})

export default () => router.routes()
