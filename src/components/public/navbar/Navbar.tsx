import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { Navbar as BootstrapNavbar, Nav, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { LOGIN_ENABLED } from '../../../Settings';
import NavbarBrand from './NavbarBrand';
import {
  PRIMARY_COLOR,
  NAVBAR_FONT_SIZE,
  NAVBAR_HEIGHT,
  MEDIA_WX,
} from '../../../common/styles';
import LanguageSelector from './LanguageSelector';

const StyledNavbar = styled(BootstrapNavbar)`
  padding: 0;
  margin: 0;
  background-color: rgba(35, 37, 38, 0.502);
  height: ${NAVBAR_HEIGHT};
  color: ${PRIMARY_COLOR};
`;

const StyledNavLink = styled(Nav.Link)`
  color: ${PRIMARY_COLOR}!important;
  font-size: ${NAVBAR_FONT_SIZE}!important;
  font-family: bebas_kairegular, tahoma;
  letter-spacing: 4px;
  padding-right: 65px !important;
  text-shadow: 0 0 5px black;

  margin-left: auto;
  @media (min-width: 768px) {
    margin-left: 0;
  }
`;

const LanguageSelectorWrapper = styled.div`
  width: 110px;
  margin-left: auto;
  @media (min-width: 768px) {
    margin-left: 0;
    width: 75px;
  }
`;

export const Navbar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Row className="m-0">
        <Col className="p-0">
          <StyledNavbar expand="md">
            <NavbarBrand />

            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BootstrapNavbar.Collapse id="basic-navbar-nav">
              <Nav>
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

                <LanguageSelectorWrapper>
                  <LanguageSelector />
                </LanguageSelectorWrapper>
              </Nav>
            </BootstrapNavbar.Collapse>
          </StyledNavbar>
        </Col>
      </Row>
    </>
  );
};
