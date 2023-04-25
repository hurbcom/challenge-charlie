import { env } from '@config/env'
import { api } from '../api'
import { openWeatherService } from './open-weather.service'

import { getThreeDaysWeather } from './open-weather.service.utils'
import { mockForecastData, mockWeatherData } from './open-weather.service.mocks'

jest.mock('../api', () => {
    return {
        api: {
            get: jest.fn(),
        },
    }
})
jest.mock('@config/env', () => ({
    env: {
        OPEN_WEATHER_API_KEY: 'fake-key',
        OPEN_WEATHER_URL: 'https://fake-open-weather-url.com',
    },
}))
jest.mock('@config/i18n', () => ({
    language: 'pt-BR',
}))

describe('openWeatherService', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('should return formatted weather data', async () => {
        jest.spyOn(api, 'get').mockImplementation((url: string) =>
            Promise.resolve({
                data:
                    url === `${env.OPEN_WEATHER_URL}/data/2.5/weather`
                        ? mockWeatherData
                        : mockForecastData,
            })
        )

        const result = await openWeatherService.getWeather('São Paulo')

        expect(result).toEqual(
            getThreeDaysWeather(mockWeatherData, mockForecastData.list)
        )

        expect(api.get).toHaveBeenCalledTimes(2)
        expect(api.get).toHaveBeenCalledWith(
            `${env.OPEN_WEATHER_URL}/data/2.5/weather`,
            {
                params: {
                    q: 'São Paulo',
                    APPID: env.OPEN_WEATHER_API_KEY,
                    lang: 'pt_br',
                    units: 'metric',
                },
            }
        )
        expect(api.get).toHaveBeenCalledWith(
            `${env.OPEN_WEATHER_URL}/data/2.5/forecast`,
            {
                params: {
                    q: 'São Paulo',
                    APPID: env.OPEN_WEATHER_API_KEY,
                    lang: 'pt_br',
                    cnt: 16,
                    units: 'metric',
                },
            }
        )
    })
})
