import React from 'react';
import logo from '../../img/logo.svg';
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
                src={logo}
                width="32"
                height="32"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
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

                <LinkContainer to="/leagues/1-mini-league" className="nav-important" style={{backgroundColor: "#ff5500", height: "100%", borderRadius: "4px"}}>
                    <Nav.Link>League: Mini League</Nav.Link>
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