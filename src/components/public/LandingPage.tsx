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
                What is SecondLife?
                </p>

                <p className="lead">
                What is kSoccer?
                </p>

                <p className="lead">
                Register
                </p>
            </div>
        </>
    );
}
