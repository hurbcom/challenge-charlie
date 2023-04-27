import styled, { keyframes } from 'styled-components'
import { SpinnerProps } from './spinner.types'

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div<SpinnerProps>`
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: ${(props) => props.color || props.theme.colors.primary};
    border-radius: 50%;
    width: ${(props) => props.size || 24}px;
    height: ${(props) => props.size || 24}px;
    animation: ${spin} 1s linear infinite;
`
