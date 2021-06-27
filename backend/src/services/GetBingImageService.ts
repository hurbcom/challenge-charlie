import BingAPI from '@libraries/BingAPI'

class GetBingImageService {
  private bingAPI: BingAPI
  private basePath: string;

  constructor (
    bingAPI: BingAPI
  ) {
    this.bingAPI = bingAPI
    this.basePath = 'https://www.bing.com'
  }

  public async execute () {
    const url = await this.bingAPI.getImage()

    const fullURL = this.basePath.concat(url)

    return fullURL
  }
}

export default GetBingImageService
