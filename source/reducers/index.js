import { combineReducers } from 'redux';
import backgroundReducer from './backgroundReducer';
import locationWeatherReducer from './locationWeatherReducer';
import temperatureUnitReducer from './temperatureUnitReducer';
import suggestionReducer from './suggestionReducer';

const rootReducer = combineReducers({
    backgroundUrl: backgroundReducer,
    weather: locationWeatherReducer,
    temperatureUnit: temperatureUnitReducer,
    suggestion: suggestionReducer,
});

export default rootReducer;
