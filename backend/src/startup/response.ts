import response from 'koa-response2'
import createContent from '../infrastructure/create-content'

export default () => response({
  format: createContent,
})
