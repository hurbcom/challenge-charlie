import React, { useState } from 'react'
import WeatherForecast from './pages/weather-forecast.page'
import CssBaseline from '@material-ui/core/CssBaseline'
import Notification from './components/notification'

function App() {
    return (
        <>
            <CssBaseline />
            <Notification />
            <WeatherForecast />
        </>
    )
}

export default App