import { combineReducers } from "redux";
// import containerImagemFundoReducer from "./components/containerImagemFundoReducer";
// import containerSubCardsReducer from "./components/containerSubCardsReducer";
import appReducer from "./appReducer";

const reducers = combineReducers({
    // dados: containerImagemFundoReducer,
    // dados: containerSubCardsReducer
    dados: appReducer
});

export default reducers;
