import { SizeType } from './styles.types'

/**
 * Transforms a hexadecimal color value to rgba. Accepts 3 and 6 character string lengths
 * @param hex Color in Hex
 * @param opacity Number between 0 and 1
 * @returns rgba string
 */
export function hexToRgba(hex: string, opacity: number): string {
    if (!hex) return ''

    hex = hex.replace('#', '')
    hex = hex.length === 3 ? hex.replace(/^(.)(.)(.)$/, '$1$1$2$2$3$3') : hex

    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)

    return `rgba(${r}, ${g}, ${b}, ${opacity})`
}
/**
 *
 * @param value Value in number or string
 * @returns Value parsed to css format, including the px when needed
 */
export const getSizeTypeCssValue = (value?: SizeType) => {
    if (!value) return
    if (typeof value === 'string') {
        return value
    }
    return `${value}px`
}
