import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PublicSite } from './public/PublicSite';
import { MemberSite } from './members/MemberSite';
import { Dashboard } from './members/Dashboard';

export function Site() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/members" component={MemberSite} />
          <Route path="/dashboard" component={Dashboard} />
          <Route component={PublicSite} />
        </Switch>
      </Router>
    </>
  );
}
