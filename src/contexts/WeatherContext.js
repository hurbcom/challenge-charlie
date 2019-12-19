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
        case 'SET_BACKGROUND_IMAGE':
            return {
                ...state,
                backgroundData: action.data
            }
        case 'WEATHER_DATA_LOAD_COMPLETE':
            return {
                ...state,
                wheaterData: action.data
            }
        case 'CHANGE_DEGREE_METRIC':
            return {
                ...state,
                currentDegreeMetric: action.data
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
        wheaterData: {},
        currentDegreeMetric: 'celsius', // celsius or fahrenheit
        backgroundData: {}
    })

    return (
        <WeatherContext.Provider value={{ data, dispatch }}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherContextProvider
