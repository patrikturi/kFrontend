import React from 'react';
import styled from 'styled-components';
import ksoccerLogoImg from '../../../img/ksoccer_logo.png';
import ksoccerImg from '../../../img/ksoccer.png';
import { Navbar as BootstrapNavbar } from 'react-bootstrap';
import { PRIMARY_COLOR, NAVBAR_FONT_SIZE } from '../../../common/styles';

const StyledNavbarBrand = styled(BootstrapNavbar.Brand)`
  font-family: Proxima Nova Bd;
  font-size: 40px;
  color: ${PRIMARY_COLOR}!important;
  letter-spacing: 4px;
  padding: 0;
  height: 100%;
`;

const Logo = styled.img`
  margin-left: 45px;
  height: 74px;
`;

const VerticalAlignHelper = styled.div`
  display: inline-block;
  height: 100%;
  vertical-align: middle;
`;

const KSoccerText = styled.img`
  height: ${NAVBAR_FONT_SIZE};
  margin-left: 31px;
  vertical-align: middle;
`;

const NavbarBrand: React.FC = () => (
  <StyledNavbarBrand>
    <VerticalAlignHelper />
    <Logo src={ksoccerLogoImg} alt="kSoccer Logo" />
    <KSoccerText src={ksoccerImg} alt="KSOCCER" />
  </StyledNavbarBrand>
);

export default NavbarBrand;
