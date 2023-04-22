export type SizeType = string | number

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
    direction?: 'row' | 'column'
    background?: string
    maxWidth?: SizeType
}
