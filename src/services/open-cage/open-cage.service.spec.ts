import { openCageService } from './open-cage.service'
import { api } from '@services/api'

jest.mock('../api', () => {
    return {
        api: {
            get: jest.fn(),
        },
    }
})
jest.mock('@config/env', () => ({
    env: {
        OPEN_CAGE_API_KEY: '123456',
        OPEN_CAGE_URL: 'https://fake-opencage.com',
    },
}))

describe('openCageService', () => {
    const mockLocation = {
        components: {
            city: 'Rio de Janeiro',
            state: 'Rio de Janeiro',
            country: 'Brazil',
        },
        formatted: 'Rio de Janeiro, Rio de Janeiro, Brazil',
    }

    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('should return location', async () => {
        const getMock = jest.spyOn(api, 'get').mockResolvedValueOnce({
            data: {
                results: [mockLocation],
            },
        })

        const location = await openCageService.getLocation(-22.9122, -43.2302)

        expect(location).toEqual(mockLocation.components)
        expect(getMock).toHaveBeenCalledTimes(1)
        expect(getMock).toHaveBeenCalledWith(
            'https://fake-opencage.com/geocode/v1/json',
            {
                params: {
                    q: '-22.9122,-43.2302',
                    key: '123456',
                    language: 'en',
                },
            }
        )
    })

    it('should throw error when no results are found', async () => {
        jest.spyOn(api, 'get').mockResolvedValueOnce({
            data: {
                results: [],
            },
        })

        await expect(
            openCageService.getLocation(-22.9122, -43.2302)
        ).rejects.toThrow('Could not get location')
    })
})
