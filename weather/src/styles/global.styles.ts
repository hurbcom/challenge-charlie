import { createGlobalStyle } from 'styled-components'
import { ThemeProps } from './themes/theme.types'

interface GlobalStylesProps {
    theme: ThemeProps
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  body {
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-size: ${(props) => props.theme.typography.sizes.body};
    color: ${(props) => props.theme.typography.colors.secondary}
  }
  h1 h2 h3 h4 h5 h6 {
    color: ${(props) => props.theme.typography.colors.primary}
  }
`
