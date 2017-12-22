import { combineReducers } from 'redux';
import backgroundReducer from './backgroundReducer';
import locationWeatherReducer from './locationWeatherReducer';
import temperatureUnitReducer from './temperatureUnitReducer';

const rootReducer = combineReducers({
    backgroundUrl: backgroundReducer,
    weather: locationWeatherReducer,
    temperatureUnit: temperatureUnitReducer,
});

export default rootReducer;
