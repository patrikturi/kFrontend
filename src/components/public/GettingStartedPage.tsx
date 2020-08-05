import React from 'react';
import Totems from '../../img/totems.png';

export const GettingStartedPage = () => {

    return (
        <>
            <div className="col-md-2"></div>
            <div className="col-md text-left">

                <p id="ksoccer" className="lead">
                    Getting Started with kSoccer
                </p>
                <p>
                    <ol>
                        <li>Click <a href="http://maps.secondlife.com/secondlife/JHRA/213/167/22" target="_blank" rel="noopener noreferrer">here</a> to teleport to the field in <a href="https://secondlife.com" target="_blank" rel="noopener noreferrer">SecondLife</a></li>
                        <li>Find the kSoccer totems and click it to get a new HUD</li>
                        <img src={Totems} alt="Totems" style={{maxWidth: "100%"}} />
                        <li>Open your inventory (Ctrl+I), find the HUD and wear it with double click</li>
                        <li>TODO: get a ball, kick it</li>
                        <li>TODO: how to continue: community, group etc.</li>
                    </ol>
                </p>

            </div>
        </>
    );
}
