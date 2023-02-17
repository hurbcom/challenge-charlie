import { IGeoLocationApiResponse } from '@/interfaces'
import { GeoLocation } from '@/models'
import { getGeolocation } from '@/modules/weather-forecast/domain/get-geolocation'
import { describe } from '@jest/globals'

const RESPONSE: IGeoLocationApiResponse = {
  results: [
    {
      formatted: 'São Paulo, SP, Brasil',
      geometry: {
        lat: -23.5505,
        lng: -46.6333,
      },
    },
  ],
}

describe('get GeoLocation', () => {
  it('should return a class with the geolocation information for the queried city', async () => {
    const API = {
      get: jest.fn().mockResolvedValue(RESPONSE),
    }

    const response = await getGeolocation({
      geoLocationApi: API,
      query: 'São Paulo',
    })

    const expected = new GeoLocation({
      latitude: -23.5505,
      longitude: -46.6333,
      city: 'São Paulo, SP, Brasil',
    })

    expect(response).toEqual(expected)
  })
})
