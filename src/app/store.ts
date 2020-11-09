import { configureStore } from '@reduxjs/toolkit';
import geoLocationReducer from '../redux/geoLocationSlice';
import notificationReducer from '../redux/notificationSlice';
import weatherReducer from '../redux/weatherSlice';

export default configureStore({
  reducer: {
    geoLocation: geoLocationReducer,
    notification: notificationReducer,
    weather: weatherReducer
  }
});
