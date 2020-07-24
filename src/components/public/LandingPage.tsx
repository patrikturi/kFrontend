import React from 'react';
import playerImage from '../../player.png';

export const LandingPage = () => {

    return (
        <>
            <div className="col-md-4 d-none d-md-block text-right">
                <img src={playerImage} alt="Soccer Player"/>
            </div>
            <div className="col-md-4">
                <p className="text-left">
                    <b>kSoccer</b> is a football mod in the game SecondLife.
                    You can customize and play with your own football palyer.
                    Be part of a team and compete for trophies.
                    Make your name among other players and become a superstar!
                </p>
                <p className="lead text-left">
                    Are you...
                    <ul>
                        <li>new? <br /><a href="/getting-started#secondlife">Get Started in SecondLife here</a></li>
                        <li>a SecondLife player? <br /> <a href="/getting-started#ksoccer">Get Started with kSoccer here</a></li>
                        <li>a kSoccer player? <br /><a href="/register">Register now!</a><br />
                        <small>or <a href="/login">Log in</a> if you already have an account</small></li>
                    </ul>
                </p>
            </div>
        </>
    );
}
