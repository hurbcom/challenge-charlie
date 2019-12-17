import React, { createContext, useReducer } from 'react'

const weatherReducer = (state, action) => {
    switch (action.type) {
        case 'CHECK_WEATHER':
            console.log(action.city, state)
            state.city = action.city
            return state
        default:
            return state
    }
}

export const WeatherContext = createContext()

const WeatherContextProvider = props => {
    const [data, dispatch] = useReducer(weatherReducer, {
      city: ''
    })

    return (
        <WeatherContext.Provider value={{ data, dispatch }}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherContextProvider
