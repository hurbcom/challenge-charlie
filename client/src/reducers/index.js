import { combineReducers } from 'redux';
import weatherReducer from './weather';

export default combineReducers({
  weather: weatherReducer
});
