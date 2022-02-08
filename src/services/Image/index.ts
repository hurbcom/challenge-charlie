import { Buffer } from 'buffer'
import { Cache, request } from '../'
import {
  BING_IMAGE_URL_CACHEKEY,
  BING_IMAGE_CACHEKEY,
  PROXY_URL,
} from '../../config'

class Image {
  private static bingImageURLCacheKey = BING_IMAGE_URL_CACHEKEY
  private static bingImageCacheKey = BING_IMAGE_CACHEKEY
  private static bingBaseURL = PROXY_URL + 'https://www.bing.com/'

  private static getBingImageURL = async () => {
    try {
      const cachedImageURL = Cache.get(this.bingImageURLCacheKey)
      if (cachedImageURL) {
        return cachedImageURL
      } else {
        const result = await request.get(
          this.bingBaseURL + 'HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-US'
        )
        const {
          data: { images },
        } = result

        if (images.length > 0) {
          const { url } = images[0]
          Cache.set(this.bingImageURLCacheKey, url, 5)
          return url
        }
      }
    } catch (e) {
      console.error(e)
    }
    return undefined
  }

  public static getFromBing = async () => {
    const cachedImageURL = Cache.get(this.bingImageCacheKey)
    if (cachedImageURL) return cachedImageURL
    try {
      const imageURL = await this.getBingImageURL()
      if (imageURL) {
        const result = await request.get(this.bingBaseURL + imageURL, {
          responseType: 'blob',
        })
        const { data: image } = result
        const buffer = await image.arrayBuffer()
        const encodedImage = Buffer.from(buffer).toString('base64')
        Cache.set(this.bingImageCacheKey, encodedImage, 5)
        return encodedImage
      }
    } catch (exception) {
      console.error(exception)
    }
    return undefined
  }
}

export default Image
