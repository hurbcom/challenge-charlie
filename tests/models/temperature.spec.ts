import { ITemperatureConstructor } from '@/interfaces'
import { Temperature } from '@/models'
import { describe } from '@jest/globals'

describe('Temperature Model', () => {
  it.each([
    [{ value: 0, unit: '°C' }, '0°C', '32°F'],
    [{ value: 14, unit: '°C' }, '14°C', '57.2°F'],
    [{ value: 15, unit: '°C' }, '15°C', '59°F'],
    [{ value: null, unit: '°C' }, '0°C', '32°F'],

    [{ value: 32, unit: '°F' }, '0°C', '32°F'],
    [{ value: 57.2, unit: '°F' }, '14°C', '57.2°F'],
    [{ value: 59, unit: '°F' }, '15°C', '59°F'],
    [{ value: 0, unit: '°F' }, '-17.78°C', '0°F'],
  ])(
    'should create a temperature object with initial value %p, and calculate => celsius %p and fahrenheit %p',
    (initial, celsius, fahrenheit) => {
      const temperature = new Temperature(initial as ITemperatureConstructor)

      expect(temperature.celsius).toEqual(celsius)
      expect(temperature.fahrenheit).toEqual(fahrenheit)
    }
  )
})
