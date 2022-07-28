import { fahrenheitToCelsius, celsiusToFahrenheit } from '../functions/temperatureConvertion'

describe('convert temperature values', () => {
  test('should convert fahrenheit to celsius and return 37', () => {
    expect(fahrenheitToCelsius(98.6)).toBe(37)
  })
  test('should convert celsius to fahrenheit and return 77', () => {
    expect(celsiusToFahrenheit(25)).toBe(77)
  })
})
