import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route component={Dashboard} path="/" exact />
        </Switch>
    );
};

export default Routes;
