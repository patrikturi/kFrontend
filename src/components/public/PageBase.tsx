import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LandingPage } from './LandingPage';
import { GettingStartedPage } from './GettingStartedPage';
import { UpdatesPage } from './UpdatesPage';

import { RegistrationForm } from './RegistrationForm';
import { LoginForm } from './LoginForm';
import SearchPlayerPage from './SearchPlayerPage';
import ProfilePage from './ProfilePage';

export const PageBase: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/getting-started" component={GettingStartedPage} />
        <Route path="/search-player" component={SearchPlayerPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/updates" component={UpdatesPage} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegistrationForm} />
        <Route component={LandingPage} />
      </Switch>
    </div>
  );
};
