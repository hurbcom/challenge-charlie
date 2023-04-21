import { env } from '@config/env'
import { api } from '../api'
import { GetWeatherResponse } from './open-weather.service.types'
import { getThreeDaysWeather } from './open-weather.service.utils'

export const openWeatherService = {
    getWeather: async (city: string) => {
        const response = await api.get<GetWeatherResponse>(
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
        )

        return getThreeDaysWeather(response.data)
    },
}
