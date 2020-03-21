import { all } from 'redux-saga/effects';

import location from './location/saga';
import weather from './weather/saga';

export default function* rootSaga() {
    return yield all([location, weather]);
}
