import { Response, Request, NextFunction } from 'express'

import Logger from '@libraries/Logger'

import Redis from '@libraries/Redis'
import { getRedisKey } from '@utils/functions'

const getResponseFromCacheIfExists = async (req: Request, res: Response, next: NextFunction) => {
  const logger = new Logger(req.id)

  if (typeof Redis.client === 'undefined') {
    return
  }

  const key = getRedisKey(req)

  Redis.client.get(key, (err: any, data: any) => {
    if (err) return next()

    if (data !== null) {
      logger.info('cached response founded, returning data from redis')

      const responseData: any = JSON.parse(data)

      return res.json(responseData)
    } else {
      console.info('cached response not found, continuing to next middleware')
      return next()
    }
  })
}
export default getResponseFromCacheIfExists
