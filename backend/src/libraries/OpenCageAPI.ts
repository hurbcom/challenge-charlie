// ?q={{latitude}},{{longitude}}
import axios, { AxiosInstance } from 'axios'
import HttpException from './HttpException'

interface GetWeatherByLocationParams {
  latitude?: number;
  longitude?: number;
  cityName?: string;
}

class OpenCageAPI {
  private axios: AxiosInstance;
  private appId: string;

  constructor () {
    this.appId = 'c63386b4f77e46de817bdf94f552cddf'

    this.axios = axios.create({
      baseURL: 'https://api.opencagedata.com/geocode/v1/json'
    })
  }

  public async getWeatherByLocation ({
    latitude,
    longitude,
    cityName
  }: GetWeatherByLocationParams): Promise<any> {
    try {
      const query = cityName || `${latitude},${longitude}`

      const { data } = await this.axios.get('/', {
        params: {
          q: query,
          key: this.appId,
          language: 'pt'
        }
      })

      return data
    } catch (error) {
      const defaultMessage = 'Failed to fetch OpenCage API'

      throw new HttpException(500, `${defaultMessage}: ${JSON.stringify(error.response.data)}`)
    }
  }
}

export default OpenCageAPI
