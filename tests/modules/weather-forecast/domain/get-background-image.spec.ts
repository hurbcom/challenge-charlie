import { IBackgroundImageApiResponse } from '@/interfaces'
import { BackgroundImage } from '@/models'
import { getBackgroundImage } from '@/modules/weather-forecast/domain/get-background-image'
import { describe } from '@jest/globals'

const RESPONSE: IBackgroundImageApiResponse = {
  images: [
    {
      url: 'https://www.bing.com/th?id=OHR.SnowyOwl_EN-US0000000000_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
      copyright: '© 2019 David Tipling/Alamy Stock Photo',
    },
  ],
}

describe('get Background Image', () => {
  it('should return a class with the background image information', async () => {
    const API = {
      get: jest.fn().mockResolvedValue(RESPONSE),
    }

    const response = await getBackgroundImage({ imageApi: API })

    const expected = new BackgroundImage({
      url: RESPONSE.images[0].url,
      attribution: RESPONSE.images[0].copyright,
    })

    expect(response).toEqual(expected)
  })
})
