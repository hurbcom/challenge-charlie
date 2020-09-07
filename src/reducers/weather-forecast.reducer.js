import {
    FETCH_WEATHERFORECAST_INIT,
    FETCH_WEATHERFORECAST_FAIL,
    FETCH_WEATHERFORECAST_DONE
} from '../actions/weather-forecast.actions'

const INITIAL_STATE = {
    fetching: false,
    forecasts: []
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
                fetching: false
            }
        case FETCH_WEATHERFORECAST_FAIL:
            return {
                ...state,
                fetching: false
            }
    }
    return state
}