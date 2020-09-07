export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION'
export const CLOSE_NOTIFICATION = 'CLOSE_NOTIFICATION'

export const showNotification = (message) => ({
    type: SHOW_NOTIFICATION,
    payload: message
})

export const closeNotification = () => ({
    type: CLOSE_NOTIFICATION
})