import {
    FETCH_LOCATION_INIT,
    FETCH_LOCATION_FAIL,
    FETCH_LOCATION_DONE
} from '../actions/location.actions'

const INITIAL_STATE = {
    fetching: false,
    latitude: 0,
    longitude: 0,
    address: ''
}

export function locationReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_LOCATION_INIT:
            return {
                ...state,
                fetching: true
            }
        case FETCH_LOCATION_DONE:
            return {
                ...state,
                ...action.payload,
                fetching: false
            }
        case FETCH_LOCATION_FAIL:
            return {
                ...state,
                fetching: false
            }
            break
    }
    return state
}