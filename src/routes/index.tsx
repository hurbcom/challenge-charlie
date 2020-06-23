import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Dashboard from '../page/Dashboard';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Dashboard} />
      <Redirect path="*" to="/" />
    </BrowserRouter>
  );
};

export default Routes;
