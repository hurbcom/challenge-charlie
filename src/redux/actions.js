// Tipos de Actions
export const actionTypes = {
    USER_AUTHORIZATION: 'USER_AUTHORIZATION',
    USER_LOCATION: 'USER_LOCATION',
}

// Seta informações de locatlidade do usuário
export const setUserLocation = ( state, city, background, climate ) => {
    return { 
        type: actionTypes.USER_LOCATION,
        user_state: state,
        user_city: city,
        background: background,
        climate: climate, 
    }
}

// Seta preferencia de autorização da localização do usuário
export const setUserAuthorization = ( authorization ) => {
    return { 
        type: actionTypes.USER_AUTHORIZATION,
        user_authorization: authorization,
    }
}