import GetBingImageService from '@services/GetBingImageService'
import BingAPI from '@libraries/BingAPI'

jest.mock('@libraries/BingAPI', () =>
  jest.fn().mockImplementation(() => ({
    getImage: () => '/some-image.png'
  }))
)

it('should return concatenated url with base url', async () => {
  const bingAPI = new BingAPI()

  const getBingImageService = new GetBingImageService(bingAPI)

  const url = await getBingImageService.execute()

  expect(url).toBe('https://www.bing.com/some-image.png')
})
