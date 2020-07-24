import React from 'react';

export const GettingStartedPage = () => {

    return (
        <>
            <div className="col-md-2"></div>
            <div className="col-md-8 text-left">

                <p id="secondlife" className="lead">
                Getting Started in SecondLife
                </p>
                <p>
                    Go to <a href="https://secondlife.com">secondlife.com</a>
                    <ul className="mb-0">
                        <li>Click "JOIN FREE" and create an account</li>
                    </ul>
                    Download and install the game<br/>
                    Start the game and log in

                </p>

                <p id="ksoccer" className="lead">
                    Getting Started with kSoccer
                </p>
                <p>
                    <ul>
                        <li>In SecondLife, teleport to <a href="">the field</a></li>
                        <li>Find a kSoccer totem and click it to get a new HUD (TODO: image)</li>
                        <li>Open your inventory (Ctrl+I), find the HUD and wear it with double click</li>
                        <li>TODO: get a ball, kick it</li>
                        <li>TODO: how to continue: community, group etc.</li>
                    </ul>
                </p>

            </div>
        </>
    );
}
