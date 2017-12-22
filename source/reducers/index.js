import { combineReducers } from 'redux';
import backgroundReducer from './backgroundReducer';

const rootReducer = combineReducers({
    backgroundUrl: backgroundReducer,
});

export default rootReducer;
