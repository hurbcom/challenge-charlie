import { koaSwagger } from 'koa2-swagger-ui'
import spec from './swagger.json'

export default () => koaSwagger({
  swaggerOptions: {
    spec,
    docExpansion: 'list',
  },
})
