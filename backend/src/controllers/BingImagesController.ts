import { NextFunction, Request, Response } from 'express'

import GetBingImageService from '@services/GetBingImageService'
import BingAPI from '@libraries/BingAPI'

class BingImagesController {
  public async getImage (_: Request, res: Response, next: NextFunction) {
    try {
      const bingAPI = new BingAPI()

      const getBingImageService = new GetBingImageService(
        bingAPI
      )

      const url = await getBingImageService.execute()

      return res.json({ url })
    } catch (error) {
      next(error)
    }
  }
}

export default new BingImagesController()
