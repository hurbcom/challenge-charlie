
import { combineReducers } from 'redux';

import weatherReducer from './weatherReducer';
import suggestionReducer from './suggestionReducer';

const rootReducer = combineReducers({
    weather: weatherReducer,
    suggestion: suggestionReducer
});

export default rootReducer;