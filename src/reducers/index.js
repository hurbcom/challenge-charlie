import { combineReducers } from "redux";
// import { reducer as formReducer } from "redux-form";
import backgroundReducer from "./backgroundReducer";

export default combineReducers({
  background: backgroundReducer
})