import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {LandingPage} from './LandingPage';
import {GettingStartedPage} from './GettingStartedPage';
import {LoginPage} from './LoginPage';

export const PageBase = () => {

    return (
        <div className="row pt-5 m-0">
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/getting-started" component={GettingStartedPage} />
                <Route path="/login" component={LoginPage} />
                <Route component={LandingPage} />
            </Switch>
        </div>
    );
}
