import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './slices/locationSlice';
import unitReducer from './slices/unitSlices';
import weatherReducer from './slices/weatherSlice';
import loadingReducer from './slices/loadingSlice';
import notificationReducer from './slices/notificationSlice';

export default configureStore({
    reducer: {
        location: locationReducer,
        weather: weatherReducer,
        unit: unitReducer,
        loading: loadingReducer,
        notification: notificationReducer,
    },
});
