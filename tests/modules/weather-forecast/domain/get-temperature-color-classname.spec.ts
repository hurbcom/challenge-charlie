import {
  getCelsiusTemperatureColorClassName,
  getFahrenheitTemperatureColorClassName,
} from '@/modules/weather-forecast/domain/get-temperature-color-classname'

import { describe } from '@jest/globals'

describe('getCelsiusTemperatureColorClassName', () => {
  it('should return `grey` for null values', () => {
    const result = getCelsiusTemperatureColorClassName(null)

    expect(result).toBe('grey')
  })

  it.each([[-12], [0], [14]])(
    'should return `blue` for temperatures below 15°C',
    (temperature) => {
      const result = getCelsiusTemperatureColorClassName(temperature)

      expect(result).toBe('blue')
    }
  )

  it.each([[15], [25], [34]])(
    'should return `yellow` for temperatures equal or greater then 15°C and lower than 35°C',
    (temperature) => {
      const result = getCelsiusTemperatureColorClassName(temperature)

      expect(result).toBe('yellow')
    }
  )

  it.each([[35], [37], [40]])(
    'should return `red` for temperatures equal or above 35°C',
    (temperature) => {
      const result = getCelsiusTemperatureColorClassName(temperature)

      expect(result).toBe('red')
    }
  )
})

describe('getFahrenheitTemperatureColorClassName', () => {
  it('should return `grey` for null values', () => {
    const result = getFahrenheitTemperatureColorClassName(null)

    expect(result).toBe('grey')
  })

  it.each([[10.4], [32], [57.2]])(
    'should return `blue` for temperatures below 59°F',
    (temperature) => {
      const result = getFahrenheitTemperatureColorClassName(temperature)

      expect(result).toBe('blue')
    }
  )

  it.each([[59], [77], [93.2]])(
    'should return `yellow` for temperatures equal or greater then 59°C and lower than 95°C',
    (temperature) => {
      const result = getFahrenheitTemperatureColorClassName(temperature)

      expect(result).toBe('yellow')
    }
  )

  it.each([[95], [98.6], [104]])(
    'should return `red` for temperatures equal or above 95°C',
    (temperature) => {
      const result = getFahrenheitTemperatureColorClassName(temperature)

      expect(result).toBe('red')
    }
  )
})
