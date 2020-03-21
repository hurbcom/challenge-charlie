import { takeLatest, all, put } from 'redux-saga/effects';
import openWeatherApi from '../../../services/openWeatherApi';
import { WeatherDataSucess, WeatherDatafailure } from './actions';

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

export default all([
    takeLatest('@weather/REQUEST', WeatherDataRequestWithCityName),
    takeLatest('@weather/UPDATE', WeatherDataRequestWithCityName)
]);
