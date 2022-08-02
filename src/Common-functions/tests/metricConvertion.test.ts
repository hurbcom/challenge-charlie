import { degToCompass, metersPerSecondToKilometersPerHour } from '../functions/metricConvertion'

describe('convert metric values', () => {
  test('should convert meters per seconds to kilometer per hour and return 151.2', () => {
    expect(metersPerSecondToKilometersPerHour(42)).toBe(151.2)
  })
  test('should convert wind angle to wind compass position and return W', () => {
    expect(degToCompass(260)).toBe('W')
  })
  test('should convert wind angle to wind compass position and return WNW', () => {
    expect(degToCompass(300)).toBe('WNW')
  })
  test('should convert wind angle to wind compass position and return N', () => {
    expect(degToCompass(10)).toBe('N')
  })
})
