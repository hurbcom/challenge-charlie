// Tipos de Actions
export const actionTypes = {
    USER_LOCATION: 'USER_LOCATION',
}

// Informações de locatlidade do usuário
export const setUserLocation = ( state, city, background, climate ) => {
    return { 
        type: actionTypes.USER_LOCATION,
        user_state: state,
        user_city: city,
        background: background,
        climate: climate, 
    }
}