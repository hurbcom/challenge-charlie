import { getSizeTypeCssValue } from '@styles/utils.styles'
import styled from 'styled-components'
import { BoxProps } from './box.types'

export const Box = styled.div<BoxProps>`
    display: flex;
    flex-direction: ${(props) => props.direction || 'row'};
    width: ${(props) => getSizeTypeCssValue(props.width) || 'auto'};
    height: ${(props) => getSizeTypeCssValue(props.height) || 'auto'};
    justify-content: ${(props) => props.justifyContent || 'flex-start'};
    align-items: ${(props) => props.alignItems || 'flex-start'};
    padding: ${(props) => getSizeTypeCssValue(props.padding) || 0};
    margin: ${(props) => getSizeTypeCssValue(props.margin) || 0};
    background: ${(props) => props.background};
    max-width: ${(props) => getSizeTypeCssValue(props.maxWidth)};
`
