import { fahrenheitToCelsius, celsiusToFahrenheit, kelvinToCelsius } from '../functions/temperatureConvertion'

describe('convert temperature values', () => {
  test('should convert fahrenheit to celsius and return 37', () => {
    expect(fahrenheitToCelsius(98.6)).toBe(37)
  })
  test('should convert celsius to fahrenheit and return 77', () => {
    expect(celsiusToFahrenheit(25)).toBe(77)
  })
  test('should convert kelvin to celsius and return 19.85', () => {
    expect(kelvinToCelsius(293)).toBe(19.85)
  })
  test('should convert kelvin to celsius and return 19.85', () => {
    expect(kelvinToCelsius(150)).toBe(-123.15)
  })
})
