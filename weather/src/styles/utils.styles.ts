export function hexToRgba(hex: string, opacity: number): string {
    if (!hex) return ''

    hex = hex.replace('#', '')
    hex = hex.length === 3 ? hex.replace(/^(.)(.)(.)$/, '$1$1$2$2$3$3') : hex

    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)

    return `rgba(${r}, ${g}, ${b}, ${opacity})`
}
