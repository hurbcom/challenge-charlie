import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducers';

const configureStore = (initialState = {}) =>
    createStore(rootReducer, initialState, applyMiddleware(thunk));

export default configureStore;
