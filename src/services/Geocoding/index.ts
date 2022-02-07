import { request } from '../'
import { OPENCAGE_URL, OPENCAGE_APIKEY } from '../../config'

class Geocoding {
  private static openCageUrl = OPENCAGE_URL
  private static openCageApiKey = OPENCAGE_APIKEY

  public static reverse = async (latitude: number, longitude: number) => {
    try {
      const response = (await request.get(this.openCageUrl, {
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
