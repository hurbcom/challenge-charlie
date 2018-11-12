
import { combineReducers } from 'redux';

import weatherReducer from './weatherReducer';
import suggestionReducer from './suggestionReducer';
import unitReducer from './unitReducer';

const rootReducer = combineReducers({
    weather: weatherReducer,
    suggestion: suggestionReducer,
    unit: unitReducer
});

export default rootReducer;