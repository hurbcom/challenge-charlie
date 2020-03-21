import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
    const persistedReducer = persistReducer(
        {
            key: 'hurb-challenge-charlie',
            storage,
            whitelist: ['location', 'weather']
        },
        reducers
    );

    return persistedReducer;
};
