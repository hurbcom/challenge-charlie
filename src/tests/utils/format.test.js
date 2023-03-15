import { celsiusToFahrenheit, getDirections } from "src/utils/format.js"

describe('utils format functions', () => {
    it('should convert celsius to fahrenheit', () => {
        let fahrenheit = celsiusToFahrenheit(0)
        expect(fahrenheit).toBe(32)
        
        fahrenheit = celsiusToFahrenheit(100)
        expect(fahrenheit).toBe(212)
    })

    it('should convert degrees into geographical direction', () => {
        let direction = getDirections(0)
        expect(direction).toBe('N')

        direction = getDirections(63)
        expect(direction).toBe('NE')

        direction = getDirections(172)
        expect(direction).toBe('S')
    })
})