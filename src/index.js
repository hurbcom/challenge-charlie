// Flow
import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

// Config
import reducers from './reducers/';

// Components
import App from './App';

// Styles - Less
import './less/main.less';

/* eslint-disable no-underscore-dangle */
const store = applyMiddleware(promise, thunk)(createStore)(
  reducers,
  /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
