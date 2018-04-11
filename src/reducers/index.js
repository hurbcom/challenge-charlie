// Flow
import { combineReducers } from 'redux';

// Reducers
import backgroundReducer from './backgroundReducer';
import locationReducer from './locationReducer';

const rootReducer = combineReducers({
  background: backgroundReducer,
  location: locationReducer,
});

export default rootReducer;
