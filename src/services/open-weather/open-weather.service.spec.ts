import { env } from '@config/env'
import { api } from '../api'
import { openWeatherService } from './open-weather.service'
import {
    WeatherResponse,
    GetForecastResponse,
} from './open-weather.service.types'
import { getThreeDaysWeather } from './open-weather.service.utils'

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

const today = new Date()
today.setHours(12)
const tomorrow = new Date()
tomorrow.setDate(today.getDate() + 1)
tomorrow.setHours(12)
const afterTomorrow = new Date()
afterTomorrow.setDate(today.getDate() + 2)
afterTomorrow.setHours(12)

const mockWeatherData: WeatherResponse = {
    weather: [
        {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
        },
    ],
    main: {
        temp: 288.68,
        pressure: 1013,
        humidity: 44,
    },
    wind: {
        speed: 4.1,
        deg: 10,
    },
    dt: Math.round(today.getTime() / 1000),
} as WeatherResponse

const mockForecastData = {
    list: [
        {
            dt: Math.round(tomorrow.getTime() / 1000),
            dt_txt: tomorrow.toISOString(),
            main: {
                temp: 20,
                pressure: 1012,
                humidity: 64,
            },
            weather: [
                {
                    main: 'Clear',
                    description: 'céu limpo',
                },
            ],
            wind: {
                speed: 1,
                deg: 90,
            },
        },
        {
            dt: Math.round(afterTomorrow.getTime() / 1000),
            dt_txt: afterTomorrow.toISOString(),
            main: {
                temp: 18,
                pressure: 1014,
                humidity: 70,
            },
            weather: [
                {
                    main: 'Clouds',
                    description: 'poucas nuvens',
                },
            ],
            wind: {
                speed: 1,
                deg: 90,
            },
        },
    ],
} as GetForecastResponse

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

        // Assertions to check if the API was called with the right parameters
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
