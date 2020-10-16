import React from 'react';
import styled from 'styled-components';
import { Navbar as BootstrapNavbar, Nav, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const StyledNavbar = styled(BootstrapNavbar)`
  padding: 0;
  margin: 0;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);
  background-color: #fff;
  width: 100%;
  height: 4.375rem;
  padding-right: 1rem;
  margin-bottom: 1.5rem;
`;

const StyledLinkContainer = styled(LinkContainer)`
  margin-right: 0;
  margin-left: auto;
`;

const StyledNavLink = styled(Nav.Link)`
  color: #858796;
  :hover {
    color: #858796;
  }
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  margin-left: 1rem;
`;

const DashboardNavbar = (): JSX.Element => {
  return (
    <StyledNavbar expand="md">
      <StyledLinkContainer to="/dashboard/profile/">
        <StyledNavLink>
          Kreison Jacobus
          <ProfilePicture
            src="https://my-secondlife-agni.akamaized.net/users/kreison.jacobus/sl_image.png"
            alt="Profile picture"
            width="48px"
            height="48px"
          ></ProfilePicture>
        </StyledNavLink>
      </StyledLinkContainer>
    </StyledNavbar>
  );
};

export default DashboardNavbar;
