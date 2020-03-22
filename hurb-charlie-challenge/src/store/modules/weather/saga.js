import { takeLatest, all, put } from 'redux-saga/effects';
import openWeatherApi from '../../../services/openWeatherApi';
import {
    WeatherDataSucess,
    WeatherDatafailure,
    WeatherChangeTemperatureSucess
} from './actions';

export function* WeatherDataRequestWithCityName({ payload }) {
    try {
        const response = yield openWeatherApi.get('', {
            params: {
                q: `${payload.location.results[0].components.city}`,
                appid: '7ba73e0eb8efe773ed08bfd0627f07b8'
            }
        });
        yield put(WeatherDataSucess(response.data));
    } catch (err) {
        yield put(WeatherDatafailure());
    }
}

export function* WeatherDataUpdateWithCityName({ payload }) {
    try {
        console.tron.log(payload);
        const response = yield openWeatherApi.get('', {
            params: {
                q: `${payload.location}`,
                appid: '7ba73e0eb8efe773ed08bfd0627f07b8'
            }
        });
        yield put(WeatherDataSucess(response.data));
    } catch (err) {
        yield put(WeatherDatafailure());
    }
}

export function* WeatherChangeTemperature({ payload }) {
    if (payload.weatherData.list[0].main.temp > 100) {
        const today = payload.weatherData.list[0].main.temp - 273;
        const nextDay = payload.weatherData.list[8].main.temp - 273;
        const nextNextDay = payload.weatherData.list[16].main.temp - 273;
        const dashboardTemperatures = {
            today,
            nextDay,
            nextNextDay
        };
        yield put(WeatherChangeTemperatureSucess(dashboardTemperatures));
    }

    if (payload.weatherData.list[0].main.temp < 100) {
        const today = payload.weatherData.list[0].main.temp + 273;
        const nextDay = payload.weatherData.list[8].main.temp + 273;
        const nextNextDay = payload.weatherData.list[16].main.temp + 273;
        const dashboardTemperatures = {
            today,
            nextDay,
            nextNextDay
        };
        yield put(WeatherChangeTemperatureSucess(dashboardTemperatures));
    }
}

export default all([
    takeLatest('@weather/REQUEST', WeatherDataRequestWithCityName),
    takeLatest('@weather/UPDATE', WeatherDataUpdateWithCityName),
    takeLatest('@weather/CHANGE_TEMPERATURE_REQUEST', WeatherChangeTemperature)
]);
