import React, { useState } from 'react'
import WeatherForecast from './pages/weather-forecast.page'
import CssBaseline from '@material-ui/core/CssBaseline'

function App() {
    return (
        <>
            <CssBaseline />
            <WeatherForecast />
        </>
    )
}

export default App