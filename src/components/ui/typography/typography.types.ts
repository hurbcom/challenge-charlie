/**
 * The typography component aims to facilitate the insertion of text in the application.
 * Having such a component helps with reuse, as well as maintaining standards within the application.
 * It receives properties like variant, which depending on the value completely changes
 * the appearance of the text. In addition, it receives other properties to customize as desired,
 * without the need to recreate other components with styled-components.
 */

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
