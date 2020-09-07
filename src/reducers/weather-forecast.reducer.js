import {
    FETCH_WEATHERFORECAST_INIT,
    FETCH_WEATHERFORECAST_FAIL,
    FETCH_WEATHERFORECAST_DONE,
    SET_SELECTED_UNIT
} from '../actions/weather-forecast.actions'

const INITIAL_STATE = {
    ready: false,
    forecasts: [],
    selectedUnit: 'celcius',
}

export function weatherForecastReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_WEATHERFORECAST_INIT:
            return {
                ...state,
                fetching: true
            }
        case FETCH_WEATHERFORECAST_DONE:
            return {
                ...state,
                forecasts: action.payload,
                ready: true,
                fetching: false
            }
        case FETCH_WEATHERFORECAST_FAIL:
            return {
                ...state,
                fetching: false
            }
        case SET_SELECTED_UNIT:
            return {
                ...state,
                selectedUnit: action.payload
            }
    }
    return state
}