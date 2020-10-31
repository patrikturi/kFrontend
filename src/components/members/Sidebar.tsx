import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import ksoccerLogoImg from '../../img/ksoccer_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const StyledSidebar = styled.div``;

const SidebarList = styled.ul`
  display: flex;
  background-color: #1a1b1b;
  background-image: linear-gradient(180deg, #1a1b1b 10%, #000000 100%);
  background-size: cover;

  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;

  width: 6.5rem;
  min-height: 100vh;
  @media (min-width: 768px) {
    width: 14rem !important;
  }
`;

const SidebarBrand = styled(RouterLink)`
  height: 60px;
  box-sizing: content-box;
  text-decoration: none;
  padding: 1.5rem 1rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  z-index: 1;
`;

const SidebarDivider = styled.hr`
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin: 0 1rem;
`;

const SidebarLink = styled(RouterLink)`
  color: #e3c190;
  display: block;
  font-weight: 700;
  text-align: center;
  padding: 1rem 0.15rem;
  width: 6.5rem;

  font-size: 0.8rem;
  @media (min-width: 768px) {
    text-align: left;
    font-size: 1.2rem;
    width: 14rem;
    padding: 1rem;
  }

  :hover {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const SidebarIcon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 1.2rem;
  margin-right: 0.5rem;
`;

const SiderbarHeading = styled.div`
  display: none;
  color: rgba(255, 255, 255, 0.4);
  margin-top: 1rem;
  padding: 0 1rem;
  font-weight: 800;
  font-size: 1rem;
  text-transform: uppercase !important;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Sidebar = (): JSX.Element => {
  return (
    <StyledSidebar>
      <SidebarList>
        <SidebarBrand to={{ pathname: '/' }}>
          <div>
            <img src={ksoccerLogoImg} height={60} alt="kSoccer"></img>
          </div>
        </SidebarBrand>
        <SidebarDivider></SidebarDivider>
        <li>
          <SidebarLink to={{ pathname: '/dashboard/' }}>
            <SidebarIcon icon={faTachometerAlt} />
            Dashboard
          </SidebarLink>
        </li>
        <SidebarDivider></SidebarDivider>
        <li>
          <SidebarLink to={{ pathname: '/dashboard/profile/' }}>
            <SidebarIcon icon={faUser} />
            Profile
          </SidebarLink>
        </li>
        <SiderbarHeading>Category</SiderbarHeading>
      </SidebarList>
    </StyledSidebar>
  );
};

export default Sidebar;
