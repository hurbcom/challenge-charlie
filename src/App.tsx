import { WeatherContextProvider } from './contexts/WeatherContext'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Home } from './Views/Home/Home'

function App() {

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <WeatherContextProvider>
                    <Home />
                    <GlobalStyle />
                </WeatherContextProvider>
            </ThemeProvider>
        </>
    )
}


export { App }