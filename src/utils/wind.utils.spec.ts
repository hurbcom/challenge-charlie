import { msToKmh } from './wind.utils'

describe('msToKmh', () => {
    it('should convert m/s to km/h', () => {
        expect(msToKmh(0)).toBe(0)
        expect(msToKmh(1)).toBeCloseTo(3.6)
        expect(msToKmh(10)).toBeCloseTo(36)
        expect(msToKmh(100)).toBeCloseTo(360)
    })
})
