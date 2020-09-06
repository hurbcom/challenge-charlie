import {
    FETCH_BACKGROUND_INIT,
    FETCH_BACKGROUND_FAIL,
    FETCH_BACKGROUND_DONE
} from '../actions/background.actions'

const INITIAL_STATE = {
    fetching: false,
    url: ''
}

export function backgroundReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_BACKGROUND_INIT:
            return {
                ...state,
                fetching: true
            }
        case FETCH_BACKGROUND_DONE:
            return {
                ...state,
                fetching: false,
                url: action.payload
            }
        case FETCH_BACKGROUND_FAIL:
            return {
                ...state,
                fetching: false
            }
            break
    }
    return state
}