import { request } from '../'
import {
  getOpenWeatherOneCallReturn,
  getCurrentAndForecastWeatherReturn,
} from '../../types/weather'
import { OPENWEATHER_BASE_URL, OPENWEATHER_APIKEY } from '../../config'

class Weather {
  private static openWeatherBaseURL = OPENWEATHER_BASE_URL
  private static openWeatherApiKey = OPENWEATHER_APIKEY

  public static getCurrentAndForecastWeather = async (
    lat: number,
    lon: number
  ): Promise<getCurrentAndForecastWeatherReturn | null> => {
    try {
      const { data } = await request.get(`${this.openWeatherBaseURL}/onecall`, {
        params: {
          lat,
          lon,
          appid: this.openWeatherApiKey,
          exclude: 'minutely,hourly,alerts',
          units: 'metric',
          lang: 'pt_br',
        },
      })
      if (!data.current || !data.daily) return null
      const { daily, current } = data as getOpenWeatherOneCallReturn
      return {
        today: current,
        tomorrow: daily[1],
        afterTomorrow: daily[2],
      }
    } catch (err) {
      throw new Error('Não foi possível obter as informações do clima.')
    }
  }
}

export default Weather
