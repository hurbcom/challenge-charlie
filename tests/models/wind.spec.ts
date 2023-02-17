import { Wind } from '@/models'
import { describe } from '@jest/globals'

describe('Wind model', () => {
  it.each([[0], [23], [44]])(
    'should return `N` when degrees are greater than 0 and lower than 45',
    (degree) => {
      const wind = new Wind(degree)

      expect(wind.direction).toBe('N')
    }
  )

  it.each([[45], [66], [89]])(
    'should return `NE` when degrees are greater than 45 and lower than 90',
    (degree) => {
      const wind = new Wind(degree)

      expect(wind.direction).toBe('NE')
    }
  )

  it.each([[90], [111], [134]])(
    'should return `E` when degrees are greater than 90 and lower than 135',
    (degree) => {
      const wind = new Wind(degree)

      expect(wind.direction).toBe('E')
    }
  )

  it.each([[135], [156], [179]])(
    'should return `SE` when degrees are greater than 135 and lower than 180',
    (degree) => {
      const wind = new Wind(degree)

      expect(wind.direction).toBe('SE')
    }
  )

  it.each([[180], [201], [224]])(
    'should return `S` when degrees are greater than 180 and lower than 225',
    (degree) => {
      const wind = new Wind(degree)

      expect(wind.direction).toBe('S')
    }
  )

  it.each([[225], [246], [269]])(
    'should return `SW` when degrees are greater than 225 and lower than 270',
    (degree) => {
      const wind = new Wind(degree)

      expect(wind.direction).toBe('SW')
    }
  )

  it.each([[270], [291], [314]])(
    'should return `W` when degrees are greater than 270 and lower than 315',
    (degree) => {
      const wind = new Wind(degree)

      expect(wind.direction).toBe('W')
    }
  )

  it.each([[315], [336], [359]])(
    'should return `NW` when degrees are greater than 315 and lower than 360',
    (degree) => {
      const wind = new Wind(degree)

      expect(wind.direction).toBe('NW')
    }
  )

  it('should return `N` when degree is equal to 360', () => {
    const wind = new Wind(360)

    expect(wind.direction).toBe('N')
  })
})
