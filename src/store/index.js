import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './slices/locationSlice';
import unitReducer from './slices/unitSlices';
import weatherReducer from './slices/weatherSlice';
import loadingReducer from './slices/loadingSlice';

export default configureStore({
    reducer: {
        location: locationReducer,
        weather: weatherReducer,
        unit: unitReducer,
        loading: loadingReducer,
    },
});
