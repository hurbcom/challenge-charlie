import { NextFunction, Request, Response } from 'express'

import HttpException from '@libraries/HttpException'
import Logger from '@libraries/Logger'
import { env } from '@configs/app'

type ExceptionHandlerResponse = {
  status: number;
  message: string;
  likelyLocation?: string;
  stack?: string;
}

export default (error: HttpException, request: Request, response: Response, next: NextFunction): Response<ExceptionHandlerResponse> => {
  const { status = 500, message = 'Internal Server Error', stack } = error
  const likelyLocation = getLikelyLocationFromError(error)

  const logger = new Logger(request.id)

  logger.error(`HttpException ${status}, ${message}, thrown at ${likelyLocation}`)

  return response.status(status).json({
    status,
    message,
    ...(env === 'local.test' && {
      likelyLocation,
      stack
    })
  })
}

function getLikelyLocationFromError (err: Error): string {
  const callerLine = err?.stack?.split('\n')[4]
  const index = callerLine?.indexOf('at ')

  if (!index) return 'none'

  const clean = callerLine?.slice(index + 2, callerLine.length)?.trim() || 'none'

  return clean
}
