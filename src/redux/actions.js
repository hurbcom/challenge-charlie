// Tipos de Actions
export const actionTypes = {
    USER_LOCATION: 'USER_LOCATION',
}

// Informações de locatlidade do usuário
export const getUserLocation = ( userLocation ) => {
    return { type: actionTypes.USER_LOCATION, userLocation: userLocation }
}