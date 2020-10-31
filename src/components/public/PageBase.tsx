import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LandingPage } from './LandingPage';
import { GettingStartedPage } from './GettingStartedPage';
import { UpdatesPage } from './UpdatesPage';
import { ResultsPage } from '../league/ResultsPage';
import { StandingsPage } from '../league/StandingsPage';
import { TopScorersPage } from '../league/TopScorersPage';
import { RulesPage } from '../league/RulesPage';
import { SchedulePage } from '../league/SchedulePage';
import { MediaPage } from '../league/MediaPage';

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
        <Route path="/login/" component={LoginForm} />
        <Route path="/register" component={RegistrationForm} />
        <Route path="/leagues/:leagueId/results" component={ResultsPage} />
        <Route path="/leagues/:leagueId/standings" component={StandingsPage} />
        <Route path="/leagues/:leagueId/schedule" component={SchedulePage} />
        <Route
          path="/leagues/:leagueId/top-scorers"
          component={TopScorersPage}
        />
        <Route path="/leagues/:leagueId/media" component={MediaPage} />
        <Route path="/leagues/:leagueId/rules" component={RulesPage} />
        <Route component={LandingPage} />
      </Switch>
    </div>
  );
};
