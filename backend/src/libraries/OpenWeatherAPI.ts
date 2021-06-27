import HttpException from '@exceptions/HttpException'
import axios, { AxiosInstance } from 'axios'

interface GetWeatherByCoordinatesParam {
  latitude: number;
  longitude: number;
}

class OpenWeatherAPI {
  private axios: AxiosInstance;
  private appId: string;

  constructor () {
    this.appId = '7ba73e0eb8efe773ed08bfd0627f07b8'

    this.axios = axios.create({
      baseURL: 'https://api.openweathermap.org/data/2.5'
    })
  }

  public async getWeatherByCoordinates ({
    latitude,
    longitude
  }: GetWeatherByCoordinatesParam): Promise<any> {
    try {
      const { data } = await this.axios.get('/onecall', {
        params: {
          lat: latitude,
          lon: longitude,
          exclude: 'hourly,minutely',
          appid: this.appId,
          lang: 'pt',
          units: 'imperial'
        }
      })

      return data
    } catch (error) {
      const defaultMessage = 'Failed to fetch OpenWeather API'

      throw new HttpException(500, `${defaultMessage}: ${JSON.stringify(error.response.data)}`)
    }
  }
}

export default OpenWeatherAPI
