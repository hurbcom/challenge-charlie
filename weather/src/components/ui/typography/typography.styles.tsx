import styled, { css } from 'styled-components'
import { TypographyProps } from './typography.types'

const Title = css`
    color: ${(props) => props.theme.typography.colors.primary};
    font-size: ${(props) => props.theme.typography.sizes.title};
    font-weight: 700;
`

const Subtitle = css`
    color: ${(props) => props.theme.typography.colors.primary};
    font-size: ${(props) => props.theme.typography.sizes.subtitle};
    font-weight: 600;
`

const Body = css`
    color: ${(props) => props.theme.typography.colors.secondary};
    font-size: ${(props) => props.theme.typography.sizes.body};
    font-weight: 400;
`

export const Typography = styled.span<TypographyProps>`
    font-family: ${(props) => props.theme.typography.fontFamily}
        ${({ variant }) => {
            switch (variant) {
                case 'title':
                    return Title
                case 'subtitle':
                    return Subtitle
                case 'body':
                    return Body
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
                    font-weight: 300;
                `
            }
            if (props.weight === 'normal') {
                return css`
                    font-weight: 400;
                `
            }
            if (props.weight === 'bold') {
                return css`
                    font-weight: 700;
                `
            }
            if (props.weight) {
                return css`
                    font-weight: ${props.weight};
                `
            }
        }}
        ${(props) => {
            if (props.size) {
                return css`
                    font-size: ${props.size};
                `
            }
        }};
`
