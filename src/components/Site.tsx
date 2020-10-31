import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard } from './members/Dashboard';
import { PublicSite } from './public/PublicSite';

export function Site() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route component={PublicSite} />
        </Switch>
      </Router>
    </>
  );
}
