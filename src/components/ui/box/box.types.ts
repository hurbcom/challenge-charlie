import { SizeType } from '@styles/styles.types'

export interface BoxProps {
    width?: SizeType
    height?: SizeType
    justifyContent?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'space-evenly'
    alignItems?: 'flex-start' | 'flex-end' | 'center'
    padding?: SizeType
    margin?: SizeType
    marginLeft?: SizeType
    marginTop?: SizeType
    marginRight?: SizeType
    marginBottom?: SizeType
    direction?: 'row' | 'column'
    background?: string
    maxWidth?: SizeType
    position?: 'absolute' | 'relative' | 'static' | 'fixed' | 'sticky'
    flex?: string | number
}
