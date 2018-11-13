
import { combineReducers } from 'redux';

import weatherReducer from './weatherReducer';
import suggestionReducer from './suggestionReducer';
import unitReducer from './unitReducer';
import imageReducer from './imageReducer';

const rootReducer = combineReducers({
    weather: weatherReducer,
    suggestion: suggestionReducer,
    unit: unitReducer,
    image: imageReducer
});

export default rootReducer;