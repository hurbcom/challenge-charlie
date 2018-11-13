import thunk from 'redux-thunk';
import  {createStore, applyMiddleware} from 'redux';
import * as locationActions from '../actions/locationActions';
import * as imageActions from '../actions/imageActions';

import rootReducer from '../reducers/index';

const initialState = {
    unit: 'C',
    suggestion: ''
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
store.dispatch(locationActions.getThisLocationWeather());
store.dispatch(imageActions.getBackgroundImage());


export default store;
