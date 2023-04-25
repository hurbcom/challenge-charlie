import { hexToRgba, getSizeTypeCssValue } from './utils.styles'

describe('hexToRgba', () => {
    it('should return the correct rgba color when given a 6 character hex color and an opacity', () => {
        const hexColor = '#0000ff'
        const opacity = 0.5
        expect(hexToRgba(hexColor, opacity)).toBe('rgba(0, 0, 255, 0.5)')
    })

    it('should return the correct rgba color when given a 3 character hex color and an opacity', () => {
        const hexColor = '#00f'
        const opacity = 0.5
        expect(hexToRgba(hexColor, opacity)).toBe('rgba(0, 0, 255, 0.5)')
    })

    it('should return an empty string if no hex color is provided', () => {
        const opacity = 0.5
        expect(hexToRgba('', opacity)).toBe('')
    })
})

describe('getSizeTypeCssValue', () => {
    it('should return undefined if no value is provided', () => {
        expect(getSizeTypeCssValue()).toBeUndefined()
    })

    it('should return the same value if a string is provided', () => {
        const str = '100%'
        expect(getSizeTypeCssValue(str)).toBe(str)
    })

    it('should add px to the provided value if a number is provided', () => {
        const value = 100
        expect(getSizeTypeCssValue(value)).toBe('100px')
    })
})
