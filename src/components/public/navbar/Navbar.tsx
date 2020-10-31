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
  WIDTH_MD,
} from '../../../common/styles';
import LanguageSelector from './LanguageSelector';

const StyledNavbar = styled(BootstrapNavbar)`
  padding: 0;
  margin: 0;
  background-color: rgba(35, 37, 38, 0.502);
  height: ${NAVBAR_HEIGHT};
  color: ${PRIMARY_COLOR};
`;

const LinkWrapper = styled.div`
  background-color: rgba(0, 0, 0, 1);
  width: 300px;
  text-align: right;
  border-radius: 15px;
  z-index: 1000;
  height: 61px;
  margin-right: 0;
  margin-left: auto;

  @media (min-width: 768px) {
    width: auto;
    margin-left: 0;
    background-color: transparent;
    min-width: 0;
    text-align: none;
  }
`;

const StyledNavLink = styled(Nav.Link)`
  color: ${PRIMARY_COLOR}!important;
  font-size: ${NAVBAR_FONT_SIZE}!important;
  font-family: bebas_kairegular, tahoma;
  letter-spacing: 4px;
  padding-right: 65px !important;
  text-shadow: 0 0 5px black;
`;

const LanguageSelectorWrapper = styled(LinkWrapper)`
  padding-right: 65px;

  @media (min-width: 768px) {
    margin-right: 30px;
    padding-right: 0;
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
                <LinkWrapper style={{ marginLeft: 'auto' }}>
                  <LinkContainer exact to="/">
                    <StyledNavLink>{t('Home')}</StyledNavLink>
                  </LinkContainer>
                </LinkWrapper>
                <LinkWrapper>
                  <LinkContainer to="/getting-started/">
                    <StyledNavLink>{t('Get Started')}</StyledNavLink>
                  </LinkContainer>
                </LinkWrapper>
                {LOGIN_ENABLED && (
                  <LinkContainer to="/login/">
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
