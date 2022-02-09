import { request } from '../'
import { OPENCAGE_URL, OPENCAGE_APIKEY } from '../../config'

class Geocoding {
  private static openCageURL = OPENCAGE_URL
  private static openCageApiKey = OPENCAGE_APIKEY

  public static foward = async (city: string) => {
    try {
      const response = await request.get(this.openCageURL, {
        params: {
          q: city,
          key: this.openCageApiKey,
        },
      })

      if (response.data?.results?.length < 0) return null
      const { results } = response.data
      const { state } = results[0].components
      const { lat: latitude, lng: longitude } = results[0].geometry
      return { city, state, latitude, longitude }
    } catch (exception) {
      throw new Error('Não foi possível obter informações da sua cidade.')
    }
  }

  public static reverse = async (latitude: number, longitude: number) => {
    try {
      const response = (await request.get(this.openCageURL, {
        params: {
          q: `${latitude},${longitude}`,
          key: this.openCageApiKey,
        },
      })) as any
      if (response.data?.results?.length < 0) return null
      const { results } = response.data
      const location = {
        city: '',
        state: '',
      }
      results.forEach((data: any) => {
        if (data.components.city) location.city = data.components.city
        if (data.components.state) location.state = data.components.state
      })
      return location
    } catch (e) {
      throw new Error('Não foi possível obter sua localização.')
    }
  }
}

export default Geocoding
