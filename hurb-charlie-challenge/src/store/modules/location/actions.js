export function LocationDataRequest(coordinates) {
    return {
        type: '@location/REQUEST',
        payload: { coordinates }
    };
}

export function LocationDataUpdate(locationData) {
    return {
        type: '@location/UPDATE',
        payload: { locationData }
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
