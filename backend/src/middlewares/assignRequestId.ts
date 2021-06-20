import { NextFunction, Request, Response } from 'express'
import { v4 as uuidV4 } from 'uuid'

export default (request: Request, response: Response, next: NextFunction): void => {
  const uuid = request.headers['x-request-id'] || uuidV4()

  request.id = uuid

  next()
}
