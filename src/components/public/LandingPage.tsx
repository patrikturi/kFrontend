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
                    Make your name among other players and become a superstar.
                </p>
                <p className="lead pt-5">
                <a href="/getting-started#secondlife">What is SecondLife?</a>
                </p>

                <p className="lead">
                <a href="/getting-started#ksoccer">What is kSoccer?</a>
                </p>

                <button type="button" className="btn btn-success btn-lg">Register now!</button>

            {/*TODO:
                Are you...
                 new? => <Get Started in SecondLife>
                 a SecondLife player? => <Get Started with kSoccer>
                 a kSoccer player? => <Register here>
                    (or Log In if you already registered)
            */}
            </div>
        </>
    );
}
