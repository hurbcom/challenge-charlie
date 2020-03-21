import { all } from 'redux-saga/effects';

import location from './location/saga';

export default function* rootSaga() {
    return yield all([location]);
}
