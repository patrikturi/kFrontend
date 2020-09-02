import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import ksoccerLogo from '../../img/ksoccer_logo.png';
import {
  Navbar as BootstrapNavbar,
  Nav,
  NavDropdown,
  Dropdown,
  Row,
  Col,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { LOGIN_ENABLED } from '../../Settings';
import { LanguageCode, languages } from '../../common/languages';
import ksoccer from '../../img/ksoccer.png';

export const Navbar = () => {
  const { t, i18n } = useTranslation();

  console.log(i18n.language || 'en');

  const currentCode = (i18n.language || 'en') as LanguageCode;
  const currentLanguage = languages[currentCode];

  const navbarTextColor = '#E3C190';
  const navbarFontSize = '30px';

  const StyledCurrentLanguageComp = styled.span`
        height: ${navbarFontSize}!important;
        font-size: 26px!important;
        padding 0;
    `;
  const currentLanguageComp = (
    <StyledCurrentLanguageComp
      className={`flag-icon flag-icon-${currentLanguage.flag}`}
    />
  );

  const handleLanguageChange = (
    eventKey: any,
    event: React.SyntheticEvent<unknown>
  ) => {
    const target = event.target as HTMLElement;
    const newLanguageName = target.textContent?.trim();
    const newLanguageCode = Object.keys(languages).find((key) => {
      const k = key as LanguageCode;
      return languages[k].name === newLanguageName;
    });
    i18n.changeLanguage(newLanguageCode!);
  };

  const languageMenuItems = Object.entries(languages)
    .filter(([code, _lang]) => code !== currentCode)
    .map(([_code, lang]) => (
      <Dropdown.Item onSelect={handleLanguageChange}>
        <span className={`flag-icon flag-icon-${lang.flag}`} /> {lang.name}
      </Dropdown.Item>
    ));

  const StyledNavLink = styled(Nav.Link)`
    color: ${navbarTextColor}!important;
    font-size: ${navbarFontSize}!important;
    font-family: bebas_kairegular, tahoma;
    letter-spacing: 4px;
    padding-right: 65px !important;
  `;

  const StyledNavDropdown = styled(NavDropdown)`
    height: ${navbarFontSize}!important;
    padding-top: 8px;
  `;

  const StyledNavbar = styled(BootstrapNavbar)`
    padding: 0;
    margin: 0;
    background-color: rgba(35, 37, 38, 0.502);
    height: 112px;
    color: ${navbarTextColor};
  `;

  const StyledNavbarBrand = styled(BootstrapNavbar.Brand)`
    font-family: Proxima Nova Bd;
    font-size: 40px;
    color: ${navbarTextColor}!important;
    letter-spacing: 4px;
  `;

  return (
    <>
      <Row className="m-0">
        <Col className="p-0">
          <StyledNavbar expand="md">
            <StyledNavbarBrand>
              <img
                src={ksoccerLogo}
                width="72px"
                height="72px"
                className="d-inline-block align-top"
                alt="kSoccer Logo"
              />
              <img src={ksoccer} alt="KSOCCER" />
            </StyledNavbarBrand>
            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BootstrapNavbar.Collapse id="basic-navbar-nav">
              <Nav style={{ width: '100%' }}>
                <LinkContainer exact to="/" className="ml-auto">
                  <StyledNavLink>{t('Home')}</StyledNavLink>
                </LinkContainer>
                <LinkContainer to="/getting-started">
                  <StyledNavLink>{t('Get Started')}</StyledNavLink>
                </LinkContainer>
                <LinkContainer to="/dummy">
                  <StyledNavLink>{'Marketplace'}</StyledNavLink>
                </LinkContainer>
                <LinkContainer to="/updates">
                  <StyledNavLink>{t('Updates')}</StyledNavLink>
                </LinkContainer>
                <LinkContainer to="/dummy">
                  <StyledNavLink>{'KCoins'}</StyledNavLink>
                </LinkContainer>

                {LOGIN_ENABLED && (
                  <LinkContainer to="/login">
                    <StyledNavLink>{t('Login')}</StyledNavLink>
                  </LinkContainer>
                )}

                <BootstrapNavbar.Toggle />

                <StyledNavDropdown title={currentLanguageComp}>
                  {languageMenuItems}
                </StyledNavDropdown>
              </Nav>
            </BootstrapNavbar.Collapse>
          </StyledNavbar>
        </Col>
      </Row>
    </>
  );
};
