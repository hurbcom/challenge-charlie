import Joi from 'joi'
import koa, { Context, Next } from 'koa'
import Logger from './logger'
import messages from './messages'

const getPayload = ({ query, body }: koa.Request) => {
  if (Object.keys(query).length) return query
  if (Object.keys(body).length) return body
  return {}
}

export default <T>(
  schema: Joi.ObjectSchema<T>): koa.Middleware => async (ctx: Context, next: Next) => {
  const payload = getPayload(ctx.request)

  const result = schema.validate(payload, { abortEarly: false })

  if (result.error) {
    const errors = result.error?.details?.map(({ message }) => message)
    Logger.warn('Validation error', errors)
    ctx.badRequest(errors, messages.invalidRequest)
    return
  }

  await next()
}
