import mockAxios from 'axios'
import { Geocoding } from '../'

describe('Geocoding test suit', () => {
  describe('foward city', () => {
    const mockSuccessResponse = {
      results: [
        {
          components: { state: 'Rio de Janeiro' },
          geometry: { lat: 10, lng: 20 },
        },
      ],
    }
    const mockFetchPromise = Promise.resolve({
      data: mockSuccessResponse,
    })

    beforeEach(() => {
      mockAxios.get.mockImplementation((url, query) => {
        const { q: city } = query.params
        if (city === 'Rio de Janeiro') return mockFetchPromise
      })
    })

    it('should return coords when city is found', async () => {
      const result = await Geocoding.foward('Rio de Janeiro')

      expect(result).toEqual({
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro',
        latitude: 10,
        longitude: 20,
      })
    })
    it('should return error when no city is found', async () => {
      expect.assertions(1)
      await expect(async () => {
        await Geocoding.foward('São Paulo')
      }).rejects.toThrow('Não foi possível')
    })
  })
  describe('reverse coords', () => {
    const mockSuccessResponse = {
      results: [
        {
          components: {
            city: 'Rio de Janeiro',
            state: 'Rio de Janeiro',
          },
        },
      ],
    }
    const mockFetchPromise = Promise.resolve({
      data: mockSuccessResponse,
    })

    beforeEach(() => {
      mockAxios.get.mockImplementation((url, query) => {
        const { q: coords } = query.params
        if (coords === '10,20') return mockFetchPromise
      })
    })

    it('should return city and state when coord is found', async () => {
      const result = await Geocoding.reverse(10, 20)

      expect(result).toEqual({
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro',
      })
    })
    it('should return error when no coords is found', async () => {
      expect.assertions(1)
      await expect(async () => {
        await Geocoding.foward(20, 10)
      }).rejects.toThrow('Não foi possível')
    })
  })
})
