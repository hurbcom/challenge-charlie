import { combineReducers } from 'redux';
import backgroundImage from './backgroundImageReducer';
import ui from './uiReducer';
import weather from './weatherReducer';


export default combineReducers({
  backgroundImage,
  ui,
  weather,
});
