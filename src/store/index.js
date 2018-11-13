import thunk from 'redux-thunk';
import  {createStore, applyMiddleware} from 'redux';
import * as locationActions from '../actions/locationActions';

import rootReducer from '../reducers/index';

const initialState = {
    unit: 'C',
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
store.dispatch(locationActions.getThisLocationWeather());

export default store;
