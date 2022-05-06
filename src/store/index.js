import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './slices/locationSlice';

export default configureStore({
    reducer: {
        location: locationReducer,
    },
});
