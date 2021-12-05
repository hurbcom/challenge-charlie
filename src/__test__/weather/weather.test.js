import weather from './weather'

describe('Test to measure the heat map of temperature', () => {
    it('Must return blue when less than 15', () => {
        expect(weather.temperature(-2)).toBe('blue')
    })

    it('Must return red when greater than 35', () => {
        expect(weather.temperature('44')).toBe('red')
    })

    it('Must return yellow when >= than 15 and <= than 35', () => {
        expect(weather.temperature('35')).toBe('yellow')
    })

    it('Must return gray when there is no temperature', () => {
        expect(weather.temperature(null)).toBe('gray')
    })
})