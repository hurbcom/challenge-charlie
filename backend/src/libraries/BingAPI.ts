import axios, { AxiosInstance } from 'axios'

class BingAPI {
  private axios: AxiosInstance;

  constructor () {
    this.axios = axios.create({
      baseURL: 'https://www.bing.com'
    })
  }

  public async getImage (): Promise<string> {
    try {
      const { data } = await this.axios.get('/HPImageArchive.aspx', {
        params: {
          format: 'js',
          idx: 0,
          n: 1,
          mkt: 'pt-BR'
        }
      })

      return data.images[0].url
    } catch (error) {
      console.log(error)

      return ''
    }
  }
}

export default BingAPI
