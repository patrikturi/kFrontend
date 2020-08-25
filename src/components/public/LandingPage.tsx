import React, {useState} from 'react';
import playerImage from '../../img/player.png';
import {RegistrationForm} from './RegistrationForm';

export const LandingPage = () => {

    const [isRegistering, setRegistering] = useState(false);

    const handleRegisterNow = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        setRegistering(true)
    }

    const handleGoBack = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        setRegistering(false);
    }

    const welcomeText = (
        <>
        <p className="text-left">
            <b>kSoccer</b> is a football mod in the game SecondLife.
            You can customize and play with your own football palyer.
            Be part of a team and compete for trophies.
            Make your name among other players and become a superstar!
        </p>
        <p className="lead text-left">
            Are you...
            <ul>
                <li>new? <br /><a href="https://secondlife.com" target="_blank" rel="noopener noreferrer">Get Started in SecondLife here</a></li>
                <li>a SecondLife player? <br /> <a href="/getting-started">Get Started with kSoccer here</a></li>
                <li>a kSoccer player? <br /><a href="/register">Register now!</a><br />
                <small>or <a href="/login" onClick={handleRegisterNow}>Log in</a> if you already have an account</small></li>
            </ul>
        </p>
        </>);

    return (
        <>
            <div className="col-md-4 d-none d-md-block text-right" style={{minWidth: 300}}>
                <img src={playerImage} alt="Soccer Player"/>
            </div>
            <div className="col-md-4">
                {isRegistering ? <RegistrationForm onGoBack={handleGoBack} /> : welcomeText}
            </div>
        </>
    );
}
