import { combineReducers } from 'redux';
import backgroundReducer from './backgroundReducer';
import locationWeatherReducer from './locationWeatherReducer';

const rootReducer = combineReducers({
    backgroundUrl: backgroundReducer,
    weather: locationWeatherReducer,
});

export default rootReducer;
