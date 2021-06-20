import { Request, Response } from 'express'

import GetBingImageService from '@services/GetBingImageService'
import BingAPI from '@libraries/BingAPI'

class BingImagesController {
  public async getImage (req: Request, res: Response) {
    const bingAPI = new BingAPI()

    const getBingImageService = new GetBingImageService(
      bingAPI
    )

    const url = await getBingImageService.execute()

    return res.json({ url })
  }
}

export default new BingImagesController()
