import { IHttpClient } from '@/interfaces'
import { getBackgroundImage } from './get-background-image'

const { BING_API_URL } = process.env

export class BackgroundImageDomain {
  private imageApi: IHttpClient

  constructor(imageApi: IHttpClient) {
    this.imageApi = imageApi
  }

  getBackgroundImage = async () => {
    return getBackgroundImage({
      imageApi: this.imageApi,
      baseUrl: String(BING_API_URL),
    })
  }
}
