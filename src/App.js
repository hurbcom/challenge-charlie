import React, { useState } from 'react'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import WeatherForecast from './pages/weather-forecast.page'
import CssBaseline from '@material-ui/core/CssBaseline'

// const store = createStore(
//     rootReducer,
//     applyMiddleware(
//         thunkMiddleware,
//     )
// )

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <CssBaseline />
            <WeatherForecast />
        </>
    )
}

export default App