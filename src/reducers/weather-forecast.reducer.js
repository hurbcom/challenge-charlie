import {
    FETCH_WEATHERFORECAST_INIT,
    FETCH_WEATHERFORECAST_FAIL,
    FETCH_WEATHERFORECAST_DONE
} from '../actions/weather-forecast.actions'

const INITIAL_STATE = {
    fetching: false,
    today: null,
    tomorrow: null,
    afterTomorrow: null
}

export function weatherForecastReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_WEATHERFORECAST_INIT:
            return {
                ...state,
                today: { ...state.today },
                tomorrow: { ...state.tomorrow },
                afterTomorrow: { ...state.afterTomorrow },
                fetching: true
            }
        case FETCH_WEATHERFORECAST_DONE:
            return {
                ...state,
                ...action.payload,
                fetching: false
            }
        case FETCH_WEATHERFORECAST_FAIL:
            return {
                ...state,
                today: { ...state.today },
                tomorrow: { ...state.tomorrow },
                afterTomorrow: { ...state.afterTomorrow },
                fetching: false
            }
    }
    return state
}