import { WeatherContextProvider } from './contexts/WeatherContext'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Home } from './Views/Home/Home'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <WeatherContextProvider>
                    <ToastContainer
                        position='top-right'
                        autoClose={3000}
                        hideProgressBar={true}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                    />
                    <Home />
                    <GlobalStyle />
                </WeatherContextProvider>
            </ThemeProvider>
        </>
    )
}


export { App }