import { SizeType } from '@styles/styles.types'

export interface TypographyProps {
    variant?: 'title' | 'subtitle' | 'body'
    color?: 'primary' | 'secondary' | string
    size?: number
    weight?: 'light' | 'normal' | 'bold' | number | string
    padding?: SizeType
    paddingLeft?: SizeType
    paddingRight?: SizeType
    paddingTop?: SizeType
    paddingBottom?: SizeType
    textTransform?:
        | 'lowercase'
        | 'uppercase'
        | 'capitalize'
        | 'none'
        | 'inherit'
}
