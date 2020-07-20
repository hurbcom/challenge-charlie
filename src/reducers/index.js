import { combineReducers } from "redux";
// import { reducer as formReducer } from "redux-form";
import backgroundReducer from "./backgroundReducer";
import coordinatesReducer from "./coordinatesReducer";
import locationReducer from "./locationReducer";
import weatherReducer from "./weatherReducer";

export default combineReducers({
  background: backgroundReducer,
  coordinates: coordinatesReducer,
  location: locationReducer,
  weather: weatherReducer,
});
