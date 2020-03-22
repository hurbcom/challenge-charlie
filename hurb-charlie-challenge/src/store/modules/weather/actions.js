export function WeatherDataRequest(location) {
    return {
        type: '@weather/REQUEST',
        payload: { location }
    };
}

export function WeatherChangeTemperatureRequest(weatherData) {
    return {
        type: '@weather/CHANGE_TEMPERATURE_REQUEST',
        payload: { weatherData }
    };
}

export function WeatherChangeTemperatureSucess(temperature) {
    return {
        type: '@weather/CHANGE_TEMPERATURE_SUCESS',
        payload: { temperature }
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
