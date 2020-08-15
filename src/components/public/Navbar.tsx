import React from 'react';
import ksoccerLogo from '../../img/ksoccer_logo.png';
import leagueLogo from '../../img/league_logo.png';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import {LOGIN_ENABLED} from '../../Settings';

export const Navbar = () => {
    return (
        <>
        <div className="row m-0 bg-dark">
        <div className="col-md-2">
        </div>
        <div className="col-md-8">
        <BootstrapNavbar bg="dark" variant="dark" expand="md">
            
            <BootstrapNavbar.Brand>
            <img
                src={ksoccerLogo}
                width="32"
                height="32"
                className="d-inline-block align-top"
                alt="kSoccer Logo"
            />
            kSoccer
            </BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <LinkContainer exact to="/">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/getting-started">
                    <Nav.Link>Getting Started</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/updates">
                    <Nav.Link>Updates</Nav.Link>
                </LinkContainer>

                {LOGIN_ENABLED && <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                </LinkContainer>}
            </Nav>
            </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
        </div>
        <div className="col-md-2">
        </div>
        </div>

        <div className="row m-0 bg-league">
        <div className="col-md-2">
        </div>
        <div className="col-md-8">
        <BootstrapNavbar className="bg-league" variant="light" expand="md">
            
            <BootstrapNavbar.Brand>
            <img
                src={leagueLogo}
                width="32"
                height="32"
                className="d-inline-block align-top"
                alt="League Logo"
            />
            Mini League
            </BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <LinkContainer exact to="/leagues/1/results">
                    <Nav.Link>Results</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/leagues/1/standings">
                    <Nav.Link>Standings</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/leagues/1/schedule">
                    <Nav.Link>Schedule</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/leagues/1/top-scorers">
                    <Nav.Link>Top Scorers</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/leagues/1/media">
                    <Nav.Link>Media</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/leagues/1/rules">
                    <Nav.Link>Rules</Nav.Link>
                </LinkContainer>
            </Nav>
            </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
        </div>
        <div className="col-md-2">
        </div>
        </div>
        </>
    );
}