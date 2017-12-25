import 'normalize.css';
import 'babel-polyfill';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import AppContainer from './containers/App';
import configureStore from './store';
import { loadBackground } from './actions/backgroundActions';
import { fetchCurrentLocationWeather } from './actions/locationActions';

const initialState = {
    temperatureUnit: 'celsius',
};

const store = configureStore(initialState);
store.dispatch(loadBackground());
store.dispatch(fetchCurrentLocationWeather());

render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('app')
);
