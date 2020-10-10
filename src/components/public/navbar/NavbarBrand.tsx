import React from 'react';
import styled from 'styled-components';
import ksoccerLogoImg from '../../../img/ksoccer_logo.png';
import ksoccerImg from '../../../img/ksoccer.png';
import { NAVBAR_FONT_SIZE } from '../../../common/styles';

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

  display: none;
  @media (min-width: 1440px) {
    display: inline-block;
  }
`;

const NavbarBrand: React.FC = () => (
  <>
    <VerticalAlignHelper />
    <Logo src={ksoccerLogoImg} alt="kSoccer Logo" />
    <KSoccerText src={ksoccerImg} alt="KSOCCER" />
  </>
);

export default NavbarBrand;
