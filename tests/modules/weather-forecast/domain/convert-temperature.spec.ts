import {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
} from '@/modules/weather-forecast/domain/convert-temperature'
import { describe } from '@jest/globals'

describe('convertTemperature', () => {
  it.each([
    [0, 32],
    [14, 57.2],
    [15, 59],
    [15.5, 59.9],
    [34, 93.2],
    [32.5, 90.5],
    [35, 95],
  ])(
    'should convert temperature from Celsius to Fahrenheit',
    (celsius, fahrenheit) => {
      const temperature = celsiusToFahrenheit(celsius)

      expect(temperature).toEqual(fahrenheit)
    }
  )

  it.each([
    [32, 0],
    [57.2, 14],
    [59, 15],
    [59.9, 15.5],
    [93.2, 34],
    [90.5, 32.5],
    [95, 35],
  ])(
    'should convert temperature from Fahrenheit to Celsius',
    (fahrenheit, celsius) => {
      const temperature = fahrenheitToCelsius(fahrenheit)

      expect(temperature).toEqual(celsius)
    }
  )
})
