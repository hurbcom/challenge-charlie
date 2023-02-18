import { BackgroundImage } from '@/models'
import { getBackgroundImage } from '@/modules/weather-forecast/domain/background-domain/get-background-image'
import { describe } from '@jest/globals'

const IMAGE_URL =
  '/th?id=OHR.SnowyOwl_EN-US0000000000_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp'
const COPYRIGHT = '© 2019 David Tipling/Alamy Stock Photo'

const RESPONSE = {
  contents: JSON.stringify({
    images: [
      {
        url: IMAGE_URL,
        copyright: COPYRIGHT,
      },
    ],
  }),
}

describe('get Background Image', () => {
  it('should return a class with the background image information', async () => {
    const BASE_URL = 'https://www.bing.com'
    const API = {
      get: jest.fn().mockResolvedValue(RESPONSE),
    }

    const response = await getBackgroundImage({
      imageApi: API,
      baseUrl: BASE_URL,
    })

    const expected = new BackgroundImage({
      url: BASE_URL + IMAGE_URL,
      attribution: COPYRIGHT,
    })

    expect(response).toEqual(expected)
  })
})
