import { NextFunction, Request, Response } from 'express'

import GetBingImageService from '@services/GetBingImageService'
import BingAPI from '@libraries/BingAPI'
import { getRedisKey } from '@utils/functions'

import Redis from '@libraries/Redis'

class BingImagesController {
  public async getImage (request: Request, res: Response, next: NextFunction) {
    try {
      const bingAPI = new BingAPI()

      const getBingImageService = new GetBingImageService(
        bingAPI
      )

      const url = await getBingImageService.execute()

      const key = getRedisKey(request)
      Redis.saveInRedis(
        key,
        { url }
      )

      return res.json({ url })
    } catch (error) {
      next(error)
    }
  }
}

export default new BingImagesController()
