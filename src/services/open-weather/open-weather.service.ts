import { env } from '@config/env'
import i18n from '@config/i18n'
import { api } from '../api'
import {
    GetForecastResponse,
    WeatherResponse,
} from './open-weather.service.types'
import { getThreeDaysWeather } from './open-weather.service.utils'

const getLang = () => {
    return i18n.language.replace('-', '_').toLowerCase()
}

export const openWeatherService = {
    getWeather: async (city: string) => {
        const [weatherResponse, forecastResponse] = await Promise.all([
            api.get<WeatherResponse>(
                `${env.OPEN_WEATHER_URL}/data/2.5/weather`,
                {
                    params: {
                        q: city,
                        APPID: env.OPEN_WEATHER_API_KEY,
                        lang: getLang(),
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
                        lang: getLang(),
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
