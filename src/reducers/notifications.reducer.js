import { SHOW_NOTIFICATION, CLOSE_NOTIFICATION } from "../actions/notifications.actions";

const INITIAL_STATE = {
    message: ''
}

export function notificationReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SHOW_NOTIFICATION:
            return {
                message: action.payload
            }
        case CLOSE_NOTIFICATION:
            return {
                message: ''
            }
    }
    return state
}