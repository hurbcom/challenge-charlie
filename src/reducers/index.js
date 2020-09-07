import { combineReducers } from 'redux'
import { backgroundReducer } from './background.reducer'
import { locationReducer } from './location.reducer'
import { weatherForecastReducer } from './weather-forecast.reducer'
import { notificationReducer } from './notifications.reducer'

export const rootReducer = combineReducers({
    background: backgroundReducer,
    location: locationReducer,
    weatherForecast: weatherForecastReducer,
    notifications: notificationReducer
})