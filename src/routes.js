import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import WeatherView from './views/Weather';

export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={WeatherView} />
    <Redirect from="*" to="/" />
  </Router>
);
