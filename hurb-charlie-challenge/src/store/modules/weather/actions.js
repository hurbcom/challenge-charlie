export function WeatherDataRequest(location) {
    return {
        type: '@weather/REQUEST',
        payload: { location }
    };
}

export function WeatherDataUpdate(location) {
    return {
        type: '@weather/UPDATE',
        payload: { location }
    };
}

export function WeatherDataSucess(weatherData) {
    return {
        type: '@weather/SUCESS',
        payload: { weatherData }
    };
}

export function WeatherDatafailure() {
    return {
        type: '@location/FAILURE'
    };
}
