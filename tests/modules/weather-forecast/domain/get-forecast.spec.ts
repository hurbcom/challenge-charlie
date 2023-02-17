import { TEMPERATURE_UNITS } from '@/common'
import { IForecastApiResponse } from '@/interfaces'
import { Forecast, Temperature, Wind } from '@/models'
import { getForecast } from '@/modules/weather-forecast/domain/get-forecast'
import { describe } from '@jest/globals'

const RESPONSE: IForecastApiResponse = {
  cod: '200',
  cnt: 3,
  list: [
    {
      dt: 1676602800,
      main: {
        temp: 20.85,
        pressure: 1005,
        humidity: 97,
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10n',
        },
      ],
      wind: {
        speed: 2.29,
        deg: 256,
      },
    },
    {
      dt: 1676613600,
      main: {
        temp: 20.27,
        pressure: 1005,
        humidity: 98,
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '11n',
        },
      ],
      wind: {
        speed: 4.21,
        deg: 219,
      },
    },
    {
      dt: 1676624400,
      main: {
        temp: 18.89,
        pressure: 1006,
        humidity: 97,
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '12n',
        },
      ],
      wind: {
        speed: 4.23,
        deg: 270,
      },
    },
  ],
  city: {
    id: 3472391,
    name: 'Amambai',
    coord: {
      lat: -23.1027,
      lon: -55.2223,
    },
  },
}

describe('get Forecast', () => {
  it('should create a temperature object with initial value %p, and calculate => celsius %p and fahrenheit %p', async () => {
    const API = {
      get: jest.fn().mockResolvedValue(RESPONSE),
    }

    const response = await getForecast({ forecastApi: API })

    const expected = new Forecast({
      today: {
        cod: '200',
        temperature: new Temperature({
          unit: TEMPERATURE_UNITS.CELSIUS,
          value: 20.85,
        }),
        pressure: 1005,
        humidity: 97,
        speed: 2.29,
        wind: new Wind(256),
        icon: '10',
      },
      tomorrow: {
        cod: '200',
        temperature: new Temperature({
          unit: TEMPERATURE_UNITS.CELSIUS,
          value: 20.27,
        }),
        pressure: 1005,
        humidity: 98,
        speed: 4.21,
        wind: new Wind(219),
        icon: '11',
      },
      dayAfterTomorrow: {
        cod: '200',
        temperature: new Temperature({
          unit: TEMPERATURE_UNITS.CELSIUS,
          value: 18.89,
        }),
        pressure: 1006,
        humidity: 97,
        speed: 4.23,
        wind: new Wind(270),
        icon: '12',
      },
    })

    expect(response).toEqual(expected)
  })
})
