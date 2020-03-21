export function LocationDataRequest(coordinates) {
    return {
        type: '@location/REQUEST',
        payload: { coordinates }
    };
}

export function LocationDataSucess(locationData) {
    return {
        type: '@location/SUCESS',
        payload: { locationData }
    };
}

export function LocationDatafailure() {
    return {
        type: '@location/FAILURE'
    };
}
