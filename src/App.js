import React, { useState } from 'react'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import WeatherForecast from './pages/weather-forecast.page'

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
            <WeatherForecast />
        </>
    )
}

export default App