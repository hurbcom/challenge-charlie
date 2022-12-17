import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Home } from './Views/Home'

function App() {

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <Home />
                <GlobalStyle />

            </ThemeProvider>
        </>
    )
}


export { App }