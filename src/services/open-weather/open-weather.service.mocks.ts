import {
    GetForecastResponse,
    WeatherResponse,
} from './open-weather.service.types'

const today = new Date()
today.setHours(12)
const tomorrow = new Date()
tomorrow.setDate(today.getDate() + 1)
tomorrow.setHours(12)
const afterTomorrow = new Date()
afterTomorrow.setDate(today.getDate() + 2)
afterTomorrow.setHours(12)

export const mockWeatherData: WeatherResponse = {
    weather: [
        {
            id: 800,
            main: 'Clear',
            description: 'céu limpo',
            icon: '01d',
        },
    ],
    main: {
        temp: 25,
        pressure: 1013,
        humidity: 44,
    },
    wind: {
        speed: 4.1,
        deg: 10,
    },
    dt: Math.round(today.getTime() / 1000),
} as WeatherResponse

export const mockForecastData = {
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
