import { Wind } from '@/models'
import { describe } from '@jest/globals'

describe('Wind model', () => {
  it.each([
    { degrees: 0, speed: 4.23 },
    { degrees: 23, speed: 4.23 },
    { degrees: 44, speed: 4.23 },
  ])(
    'should return `N` when degrees are greater than 0 and lower than 45',
    (degree) => {
      const wind = new Wind(degree)

      expect(wind.direction).toBe('N')
    }
  )

  it.each([
    { degrees: 45, speed: 4.23 },
    { degrees: 66, speed: 4.23 },
    { degrees: 89, speed: 4.23 },
  ])(
    'should return `NE` when degrees are greater than 45 and lower than 90',
    (degree) => {
      const wind = new Wind(degree)

      expect(wind.direction).toBe('NE')
    }
  )

  it.each([
    { degrees: 90, speed: 4.23 },
    { degrees: 111, speed: 4.23 },
    { degrees: 134, speed: 4.23 },
  ])(
    'should return `E` when degrees are greater than 90 and lower than 135',
    (degree) => {
      const wind = new Wind(degree)

      expect(wind.direction).toBe('E')
    }
  )

  it.each([
    { degrees: 135, speed: 4.23 },
    { degrees: 156, speed: 4.23 },
    { degrees: 179, speed: 4.23 },
  ])(
    'should return `SE` when degrees are greater than 135 and lower than 180',
    (degree) => {
      const wind = new Wind(degree)

      expect(wind.direction).toBe('SE')
    }
  )

  it.each([
    { degrees: 180, speed: 4.23 },
    { degrees: 201, speed: 4.23 },
    { degrees: 224, speed: 4.23 },
  ])(
    'should return `S` when degrees are greater than 180 and lower than 225',
    (degree) => {
      const wind = new Wind(degree)

      expect(wind.direction).toBe('S')
    }
  )

  it.each([
    { degrees: 225, speed: 4.23 },
    { degrees: 246, speed: 4.23 },
    { degrees: 269, speed: 4.23 },
  ])(
    'should return `SW` when degrees are greater than 225 and lower than 270',
    (degree) => {
      const wind = new Wind(degree)

      expect(wind.direction).toBe('SW')
    }
  )

  it.each([
    [{ degrees: 270, speed: 4 }],
    [{ degrees: 291, speed: 4 }],
    [{ degrees: 314, speed: 4 }],
  ])(
    'should return `W` when degrees are greater than 270 and lower than 315',
    (degree) => {
      const wind = new Wind(degree)

      expect(wind.direction).toBe('W')
    }
  )

  it.each([
    [{ degrees: 315, speed: 4 }],
    [{ degrees: 336, speed: 4 }],
    [{ degrees: 359, speed: 4 }],
  ])(
    'should return `NW` when degrees are greater than 315 and lower than 360',
    (degree) => {
      const wind = new Wind(degree)

      expect(wind.direction).toBe('NW')
    }
  )

  it('should return `N` when degree is equal to 360', () => {
    const wind = new Wind({ degrees: 360, speed: 4.23 })

    expect(wind.direction).toBe('N')
  })
})
