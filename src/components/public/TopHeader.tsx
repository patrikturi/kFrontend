import React from 'react';
import headerImg from '../../img/soccer-boots.jpg';
import otherImg from '../../img/stadium.jpg';
import { Route, Switch } from 'react-router-dom';
import ksoccerLogo from '../../img/ksoccer_logo.png';
import leagueLogo from '../../img/league_logo.png';

export const TopHeader = () => {
    const welcomeImage = () => {return (<img
        src={headerImg}
        alt="Header"
        className="clip"
        />)};
    const otherImage = () => {return (
        <img
        src={otherImg}
        alt="Header"
        className="clip"
        />
    )};
    const ksoccerLogoComponent = () => {return (
        <img
        src={ksoccerLogo}
        width="250"
        height="250"
        alt="kSoccer Logo"
        style={{zIndex: 1000, position: 'absolute', top: 0, right: 0}}
        />
    )};
    const leagueLogoComponent = () => {return (
        <img
        src={leagueLogo}
        width="250"
        height="250"
        alt="League Logo"
        style={{zIndex: 1000, position: 'absolute', top: 0, right: 0}}
        />
    )};
    return (
        <div className="headerContainer">
            <Switch>
                <Route exact path="/" component={welcomeImage} />
                <Route path="/getting-started" component={otherImage} />
                <Route path="/updates" component={otherImage} />
                <Route path="/login" component={otherImage} />
                <Route component={welcomeImage} />
            </Switch>
            <Switch>
                <Route path="/leagues" component={leagueLogoComponent} />
                <Route component={ksoccerLogoComponent} />
            </Switch>
        </div>
    );
}
