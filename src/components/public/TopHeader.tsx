import React from 'react';
import headerImg from '../../img/soccer-boots.jpg';
import otherImg from '../../img/stadium.jpg';
import { Route, Switch } from 'react-router-dom';

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
    return (
        <div className="headerContainer">
            <Switch>
                <Route exact path="/" component={welcomeImage} />
                <Route path="/getting-started" component={otherImage} />
                <Route path="/updates" component={otherImage} />
                <Route path="/login" component={otherImage} />
                <Route component={welcomeImage} />
            </Switch>
        </div>
    );
}
