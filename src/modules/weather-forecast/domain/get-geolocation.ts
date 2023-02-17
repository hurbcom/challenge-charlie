import { ENDPOINTS } from '@/common'
import { IGeoLocationApiResponse, IHttpClient } from '@/interfaces'
import { GeoLocation } from '@/models'

interface Params {
  geoLocationApi: IHttpClient
  query: string
}

export async function getGeolocation({ geoLocationApi, query }: Params) {
  const apiGeoLocation = await geoLocationApi.get<IGeoLocationApiResponse>(
    ENDPOINTS.GEOLOCATION.GET,
    {
      params: {
        q: query,
        language: 'pt',
        pretty: 1,
      },
    }
  )

  const firstResult = apiGeoLocation.results[0]

  const geolocation = new GeoLocation({
    city: firstResult.formatted,
    latitude: firstResult.geometry.lat,
    longitude: firstResult.geometry.lng,
  })

  return geolocation
}
