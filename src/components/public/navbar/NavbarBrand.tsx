import React from 'react';
import styled from 'styled-components';
import ksoccerLogo from '../../../img/ksoccer_logo.png';
import ksoccer from '../../../img/ksoccer.png';
import { Navbar as BootstrapNavbar } from 'react-bootstrap';
import { PRIMARY_COLOR } from '../../../common/styles';

const StyledNavbarBrand = styled(BootstrapNavbar.Brand)`
  font-family: Proxima Nova Bd;
  font-size: 40px;
  color: ${PRIMARY_COLOR}!important;
  letter-spacing: 4px;
`;

const NavbarBrand: React.FC = () => (
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
);

export default NavbarBrand;
