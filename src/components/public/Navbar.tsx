import React from 'react';
import { useTranslation } from 'react-i18next';
import ksoccerLogo from '../../img/ksoccer_logo.png';
import leagueLogo from '../../img/league_logo.png';
import { Navbar as BootstrapNavbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import {LOGIN_ENABLED} from '../../Settings';
import {LanguageCode, languages} from '../../common/languages';


export const Navbar = () => {
    const { t, i18n } = useTranslation();

    console.log(i18n.language || 'en');

    const currentCode = (i18n.language || 'en') as LanguageCode;
    const currentLanguage = languages[currentCode];

    const currentLanguageComp = 
    (<>
        <span className={`flag-icon flag-icon-${currentLanguage.flag}`} /> {currentLanguage.name}
    </>);


    const handleLanguageChange = (eventKey: any, event: React.SyntheticEvent<unknown>) => {
        const target = event.target as HTMLElement;
        const newLanguageName = target.textContent?.trim();
        const newLanguageCode = Object.keys(languages).find((key) => {
            const k = key as LanguageCode;
            return languages[k].name === newLanguageName;
        });
        i18n.changeLanguage(newLanguageCode!);
    }

    const languageMenuItems = Object.entries(languages)
                                    .filter(([code, _lang]) => code !== currentCode)
                                    .map(([_code, lang]) => 
                                    (<Dropdown.Item onSelect={handleLanguageChange}>
                                        <span className={`flag-icon flag-icon-${lang.flag}`} /> {lang.name}
                                    </Dropdown.Item>))

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
            <Nav>
                <LinkContainer exact to="/">
                    <Nav.Link>{t('Home')}</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/getting-started">
                    <Nav.Link>{t('Getting Started')}</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/updates">
                    <Nav.Link>{t('Updates')}</Nav.Link>
                </LinkContainer>

                {LOGIN_ENABLED && <LinkContainer to="/login">
                    <Nav.Link>{t('Login')}</Nav.Link>
                </LinkContainer>}

                <BootstrapNavbar.Toggle />

                <NavDropdown title={currentLanguageComp} id="nav-language" className="ml-auto">
                    {languageMenuItems}
                </NavDropdown>
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