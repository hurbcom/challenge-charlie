import { ENDPOINTS, TEMPERATURE_UNITS } from '@/common'
import { IForecastApiResponse, IHttpClient } from '@/interfaces'
import { Condition, Forecast, Temperature, Wind } from '@/models'

interface Params {
  forecastApi: IHttpClient
  latitude: number
  longitude: number
}

export async function getForecast({
  forecastApi,
  latitude,
  longitude,
}: Params) {
  const apiForecast = await forecastApi.get<IForecastApiResponse>(
    ENDPOINTS.FORECAST.GET,
    {
      params: {
        lat: latitude,
        lon: longitude,
        cnt: 3,
        units: 'metric',
        lang: 'pt',
      },
    }
  )

  const [today, tomorrow, dayAfterTomorrow] = apiForecast.list.map((day) => {
    const temperature = new Temperature({
      unit: TEMPERATURE_UNITS.CELSIUS,
      value: day.main.temp,
    })

    const wind = new Wind({ degrees: day.wind.deg, speed: day.wind.speed })

    const firstWeather = day.weather[0]
    const condition = new Condition({
      description: firstWeather.description,
      icon: firstWeather.icon,
    })

    return {
      cod: apiForecast.cod,
      temperature,
      pressure: day.main.pressure,
      humidity: day.main.humidity,
      speed: day.wind.speed,
      wind,
      condition,
    }
  })

  const forecast = new Forecast({ today, tomorrow, dayAfterTomorrow })

  return forecast
}
