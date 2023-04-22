import React from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { GlobalStyles } from './global.styles'
import { lightTheme } from './themes/light-theme'

type Props = {
    children?: React.ReactNode
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
    return (
        <SCThemeProvider theme={lightTheme}>
            <GlobalStyles />
            {children}
        </SCThemeProvider>
    )
}
