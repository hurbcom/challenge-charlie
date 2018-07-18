import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
// reducer
import reducer from './reducers';
// Pages
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';

render(
  <Provider store={createStore(reducer, {}, applyMiddleware(thunk))}>
    <Router>
      <Route exact path={'/'} component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
