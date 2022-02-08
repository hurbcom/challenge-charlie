import { request } from '../'
import { getWeatherReturn } from '../../types/weather'
import { OPENWEATHER_BASE_URL, OPENWEATHER_APIKEY } from '../../config'

class Weather {
  private static openWeatherBaseURL = OPENWEATHER_BASE_URL
  private static openWeatherApiKey = OPENWEATHER_APIKEY

  public static getTodayForecast = async (
    city: string
  ): Promise<getWeatherReturn | null> => {
    try {
      const { data } = await request.get(`${this.openWeatherBaseURL}/weather`, {
        params: {
          q: city,
          appid: this.openWeatherApiKey,
          units: 'metric',
          lang: 'pt_br',
        },
      })

      if (!data.weather) return null

      const { weather, main, wind } = data
      return { weather, main, wind } as getWeatherReturn
    } catch (e) {
      throw new Error('Não foi possível obter o clima de hoje.')
    }
  }
}

export default Weather
