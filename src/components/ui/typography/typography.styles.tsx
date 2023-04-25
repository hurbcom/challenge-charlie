import { getSizeTypeCssValue } from '@styles/utils.styles'
import styled, { css } from 'styled-components'
import { TypographyProps } from './typography.types'

const Title = css`
    color: ${(props) => props.theme.typography.colors.primary};
    font-size: ${(props) => props.theme.typography.sizes.title};
    font-weight: ${(props) => props.theme.typography.weights.bold};
`

const Subtitle = css`
    color: ${(props) => props.theme.typography.colors.primary};
    font-size: ${(props) => props.theme.typography.sizes.subtitle};
    font-weight: ${(props) => props.theme.typography.weights.bold};
`

const Body = css`
    color: ${(props) => props.theme.typography.colors.secondary};
    font-size: ${(props) => props.theme.typography.sizes.body};
    font-weight: ${(props) => props.theme.typography.weights.normal};
`

export const Typography = styled.span<TypographyProps>`
    font-family: ${(props) => props.theme.typography.fontFamily};
    ${({ variant }) => {
        switch (variant) {
            case 'title':
                return Title
            case 'subtitle':
                return Subtitle
            default:
                return Body
        }
    }}
    ${(props) => {
        if (props.color === 'primary') {
            return css`
                color: ${props.theme.typography.colors.primary};
            `
        }
        if (props.color === 'secondary') {
            return css`
                color: ${props.theme.typography.colors.secondary};
            `
        }
        if (props.color) {
            return css`
                color: ${props.color};
            `
        }
    }}
    ${(props) => {
        if (props.weight === 'light') {
            return css`
                font-weight: ${props.theme.typography.weights.light};
            `
        }
        if (props.weight === 'normal') {
            return css`
                font-weight: ${props.theme.typography.weights.normal};
            `
        }
        if (props.weight === 'bold') {
            return css`
                font-weight: ${props.theme.typography.weights.bold};
            `
        }
        if (props.weight) {
            return css`
                font-weight: ${props.weight};
            `
        }
    }};
    font-size: ${(props) => props.size};
    padding: ${(props) => getSizeTypeCssValue(props.padding)};
    padding-left: ${(props) => getSizeTypeCssValue(props.paddingLeft)};
    padding-right: ${(props) => getSizeTypeCssValue(props.paddingRight)};
    padding-top: ${(props) => getSizeTypeCssValue(props.paddingTop)};
    padding-bottom: ${(props) => getSizeTypeCssValue(props.paddingBottom)};
    text-transform: ${(props) => props.textTransform};
`
