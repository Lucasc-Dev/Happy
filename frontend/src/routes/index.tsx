import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import OrphanagesMap from '../pages/OrphanagesMap';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={LandingPage} exact />
                <Route path="/app" component={OrphanagesMap} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;