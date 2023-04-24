/**
 * The box component is a component to facilitate layout.
 * It basically receives some properties that css would need to use and passes
 * these properties to the component. In addition, it uses the flex display by default,
 * which helps in organizing the elements.
 */

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
    margin-left: ${(props) => getSizeTypeCssValue(props.marginLeft) || 0};
    margin-top: ${(props) => getSizeTypeCssValue(props.marginTop) || 0};
    margin-right: ${(props) => getSizeTypeCssValue(props.marginRight) || 0};
    margin-bottom: ${(props) => getSizeTypeCssValue(props.marginBottom) || 0};
    background: ${(props) => props.background};
    max-width: ${(props) => getSizeTypeCssValue(props.maxWidth)};
    position: ${(props) => getSizeTypeCssValue(props.position)};
    flex: ${(props) => getSizeTypeCssValue(props.flex)};
`
