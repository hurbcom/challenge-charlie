import { combineReducers } from 'redux';
import background from './background';
import brazilStates from './brazilStates';
import location from './location';
import unit from './unit';
import weather from './weather';

export default combineReducers({
  background,
  brazilStates,
  location,
  unit,
  weather,
});
