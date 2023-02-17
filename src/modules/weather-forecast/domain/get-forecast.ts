import { ENDPOINTS, TEMPERATURE_UNITS } from '@/common'
import { IForecastApiResponse, IHttpClient } from '@/interfaces'
import { Forecast, Temperature, Wind } from '@/models'

interface Params {
  forecastApi: IHttpClient
}

export async function getForecast({ forecastApi }: Params) {
  const apiForecast = await forecastApi.get<IForecastApiResponse>(
    ENDPOINTS.FORECAST.GET,
    {
      params: {
        lat: '',
        lon: '',
        cnt: 3,
        units: 'metric',
      },
    }
  )

  const [today, tomorrow, dayAfterTomorrow] = apiForecast.list.map((day) => {
    const temperature = new Temperature({
      unit: TEMPERATURE_UNITS.CELSIUS,
      value: day.main.temp,
    })

    const wind = new Wind(day.wind.deg)

    const icon = day.weather[0].icon.replace(/\D/g, '')

    return {
      cod: apiForecast.cod,
      temperature,
      pressure: day.main.pressure,
      humidity: day.main.humidity,
      speed: day.wind.speed,
      wind,
      icon,
    }
  })

  const forecast = new Forecast({ today, tomorrow, dayAfterTomorrow })

  return forecast
}
