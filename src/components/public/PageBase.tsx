import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LandingPage } from './LandingPage';
import { GettingStartedPage } from './GettingStartedPage';
import { LoginPage } from './LoginPage';
import { UpdatesPage } from './UpdatesPage';
import { ResultsPage } from '../league/ResultsPage';
import { StandingsPage } from '../league/StandingsPage';
import { TopScorersPage } from '../league/TopScorersPage';
import { RulesPage } from '../league/RulesPage';
import { SchedulePage } from '../league/SchedulePage';
import { MediaPage } from '../league/MediaPage';

import styled from 'styled-components';
import HomeBackground from '../../img/home_background.jpg';

export const PageBase = () => {
  const Base = styled.div`
    background-color: transparent;
  `;

  return (
    <div className="row pt-5 pb-5 m-0">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/getting-started" component={GettingStartedPage} />
        <Route path="/updates" component={UpdatesPage} />
        <Route path="/login" component={LoginPage} />
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
