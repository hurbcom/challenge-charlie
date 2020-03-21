import { combineReducers } from 'redux';
import location from './location/reducer';
import weather from './weather/reducer';

export default combineReducers({
    location,
    weather
});
