import { env } from '@config/env'
import { api } from '../api'
import {
    GetForecastResponse,
    WeatherResponse,
} from './open-weather.service.types'
import { getThreeDaysWeather } from './open-weather.service.utils'

export const openWeatherService = {
    getWeather: async (city: string) => {
        const [weatherResponse, forecastResponse] = await Promise.all([
            api.get<WeatherResponse>(
                `${env.OPEN_WEATHER_URL}/data/2.5/weather`,
                {
                    params: {
                        q: city,
                        APPID: env.OPEN_WEATHER_API_KEY,
                        lang: 'pt',
                        units: 'metric',
                    },
                }
            ),
            api.get<GetForecastResponse>(
                `${env.OPEN_WEATHER_URL}/data/2.5/forecast`,
                {
                    params: {
                        q: city,
                        APPID: env.OPEN_WEATHER_API_KEY,
                        lang: 'pt',
                        cnt: 16,
                        units: 'metric',
                    },
                }
            ),
        ])

        return getThreeDaysWeather(
            weatherResponse.data,
            forecastResponse.data.list
        )
    },
}
