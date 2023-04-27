import {
    getThreeDaysWeather,
    getWindDirection,
} from './open-weather.service.utils'

import { mockForecastData, mockWeatherData } from './open-weather.service.mocks'

describe('getWindDirection', () => {
    it('returns the correct direction for an angle', () => {
        expect(getWindDirection(0)).toEqual('n')
        expect(getWindDirection(90)).toEqual('e')
        expect(getWindDirection(180)).toEqual('s')
        expect(getWindDirection(270)).toEqual('w')
        expect(getWindDirection(360)).toEqual('n')
    })
})

describe('getThreeDaysWeather', () => {
    it('returns an array of three objects with weather data for the next three days', () => {
        const result = getThreeDaysWeather(
            mockWeatherData,
            mockForecastData.list
        )
        expect(result).toHaveLength(3)
        expect(result[0]).toEqual({
            temp: 25,
            description: 'céu limpo',
            name: 'Clear',
            pressure: 1013,
            humidity: 44,
            wind: 4.1,
            windDirection: 'n',
        })
        expect(result[1]).toEqual({
            temp: 20,
            description: 'céu limpo',
            name: 'Clear',
            pressure: 1012,
            humidity: 64,
            wind: 1,
            windDirection: 'e',
        })
        expect(result[2]).toEqual({
            temp: 18,
            description: 'poucas nuvens',
            name: 'Clouds',
            pressure: 1014,
            humidity: 70,
            wind: 1,
            windDirection: 'e',
        })
    })

    it('throws error if list is empty', () => {
        expect(() => getThreeDaysWeather(mockWeatherData, [])).toThrow(
            'Could not get next three days weather'
        )
    })

    it('throws error if there is not enough forecast data', () => {
        expect(() =>
            getThreeDaysWeather(mockWeatherData, [mockForecastData.list[0]])
        ).toThrow('Could not get next three days weather')
    })

    it('calculates the correct wind direction for each weather data', () => {
        const result = getThreeDaysWeather(
            mockWeatherData,
            mockForecastData.list
        )
        expect(result[0].windDirection).toEqual('n')
        expect(result[1].windDirection).toEqual('e')
        expect(result[2].windDirection).toEqual('e')
    })
})
