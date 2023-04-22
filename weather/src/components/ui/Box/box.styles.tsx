import styled from 'styled-components'
import { BoxProps, SizeType } from './box.types'

const getValueParsed = (value?: SizeType) => {
    if (!value) return
    if (typeof value === 'string') {
        return value
    }
    return `${value}px`
}

export const Box = styled.div<BoxProps>`
    display: flex;
    flex-direction: ${(props) => props.direction || 'row'};
    width: ${(props) => getValueParsed(props.width) || 'auto'};
    height: ${(props) => getValueParsed(props.height) || 'auto'};
    justify-content: ${(props) => props.justifyContent || 'flex-start'};
    align-items: ${(props) => props.alignItems || 'flex-start'};
    padding: ${(props) => getValueParsed(props.padding) || 0};
    margin: ${(props) => getValueParsed(props.margin) || 0};
    background: ${(props) => props.background};
    max-width: ${(props) => getValueParsed(props.maxWidth)};
`
