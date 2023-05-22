import fetch from 'node-fetch'
import { createSuccessServiceResult, ServiceResult } from '../../infrastructure/create-service-result'

const bingUrlPrefix = 'https://www.bing.com'
const url = process.env.BING_URL

interface BingResponse {
  images: [{ url: string }]
}

export default {
  getBingImageOfTheDay: async (): Promise<ServiceResult<Buffer>> => {
    const response = await fetch(url)
    const data = await response.json() as BingResponse

    const imageUrl = `${bingUrlPrefix}${data.images[0].url}`
    const imageResponse = await fetch(imageUrl)
    const imageBuffer = await imageResponse.buffer()

    return createSuccessServiceResult<Buffer>(imageBuffer)
  },
}
