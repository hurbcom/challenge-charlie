import { bingService } from './bing.service'
import { api } from '../api'
import { env } from '@config/env'

jest.mock('../api', () => {
    return {
        api: {
            get: jest.fn(),
        },
    }
})

describe('bingService', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should call api.get with the correct parameters', async () => {
        const mockResponse = {
            data: {
                images: [
                    {
                        url: 'https://example.com/image.jpg',
                        otherData: 'otherValue',
                    },
                ],
            },
        }
        const expectedUrl = `${env.CORS_PROXY}/${env.BING_URL}/HPImageArchive.aspx`
        const expectedParams = {
            params: {
                format: 'js',
                idx: 0,
                n: 1,
                mkt: 'pt-US',
            },
        }

        jest.spyOn(api, 'get').mockResolvedValueOnce(mockResponse)

        const result = await bingService.getBackgroundUrl()

        expect(api.get).toHaveBeenCalledWith(expectedUrl, expectedParams)
        expect(result).toBe(mockResponse.data.images[0].url)
    })

    it('should throw an error if there are no images returned', async () => {
        const mockResponse = {
            data: {
                images: [],
            },
        }

        jest.spyOn(api, 'get').mockResolvedValueOnce(mockResponse)

        await expect(bingService.getBackgroundUrl()).rejects.toThrow(
            'Could not get background image'
        )
    })
})
