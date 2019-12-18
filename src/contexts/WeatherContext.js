import React, { createContext, useReducer } from 'react'

const weatherReducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_START':
            return {
                ...state,
                loading: true
            }
        case 'LOAD_COMPLETE':
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export const WeatherContext = createContext()

const WeatherContextProvider = props => {
    const [data, dispatch] = useReducer(weatherReducer, {
        loading: false,
        errorMessage: '',
        wheaterData: {}
    })

    return (
        <WeatherContext.Provider value={{ data, dispatch }}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherContextProvider
