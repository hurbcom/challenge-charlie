import { celsiusToFahrenheit } from './temperature.utils'

describe('celsiusToFahrenheit', () => {
    it('converts 0°C to 32°F', () => {
        const result = celsiusToFahrenheit(0)
        expect(result).toEqual(32)
    })

    it('converts 10°C to 50°F', () => {
        const result = celsiusToFahrenheit(10)
        expect(result).toEqual(50)
    })

    it('converts -10°C to 14°F', () => {
        const result = celsiusToFahrenheit(-10)
        expect(result).toEqual(14)
    })

    it('converts -40°C to -40°F', () => {
        const result = celsiusToFahrenheit(-40)
        expect(result).toEqual(-40)
    })
})
