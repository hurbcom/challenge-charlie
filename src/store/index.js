import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './slices/locationSlice';
import weatherReducer from './slices/weatherSlice';

export default configureStore({
    reducer: {
        location: locationReducer,
        weather: weatherReducer,
    },
});
