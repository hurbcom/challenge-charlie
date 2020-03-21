import { takeLatest, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import openGateApi from '../../../services/openGateApi';
import { LocationDataSucess, LocationDatafailure } from './actions';

export function* GetLocationDataWithCoords({ payload }) {
    try {
        const { latitude, longitude } = payload.coordinates;
        const response = yield openGateApi.get('/json', {
            params: {
                q: `${latitude} ${longitude}`,
                key: 'c63386b4f77e46de817bdf94f552cddf'
            }
        });
        yield put(LocationDataSucess(response.data.results[0]));
    } catch (err) {
        toast.error('Erro ao Localizar');
        yield put(LocationDatafailure());
    }
}

export default all([
    takeLatest('@location/REQUEST', GetLocationDataWithCoords)
]);
