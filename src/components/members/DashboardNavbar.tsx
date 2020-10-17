import React from 'react';
import styled from 'styled-components';
import {
  Navbar as BootstrapNavbar,
  Dropdown,
  NavDropdown,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const StyledNavbar = styled(BootstrapNavbar)`
  padding: 0;
  margin: 0;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);
  background-color: #fff;
  width: 100%;
  padding-right: 1.5rem;
  margin-bottom: 1.5rem;
`;

const StyledNavDropdown = styled(NavDropdown)`
  margin-right: 0;
  margin-left: auto;
`;

const StyledDropdownTitle = styled.div`
  color: #858796;
  :hover {
    color: #858796;
  }
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  margin-left: 1rem;
`;

const StyledDropdownItem = styled(Dropdown.Item)`
  font-size: 1rem;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: #d1d3e2;
  margin-right: 0.5rem;
`;

const DashboardNavbar = (): JSX.Element => {
  const DropdownTitle = (
    <StyledDropdownTitle>
      Kreison Jacobus
      <ProfilePicture
        src="https://my-secondlife-agni.akamaized.net/users/kreison.jacobus/sl_image.png"
        alt="Profile picture"
        width="48px"
        height="48px"
      ></ProfilePicture>
    </StyledDropdownTitle>
  );

  const handleSelect = () => {};

  return (
    <StyledNavbar id="dashboard-nav">
      <StyledNavDropdown title={DropdownTitle} alignRight={true}>
        <StyledDropdownItem key="edit-profile" onSelect={handleSelect}>
          <StyledIcon icon={faUser} />
          Edit Profile
        </StyledDropdownItem>
        <NavDropdown.Divider />
        <StyledDropdownItem key="logout" onSelect={handleSelect}>
          <StyledIcon icon={faSignOutAlt} />
          Logout
        </StyledDropdownItem>
      </StyledNavDropdown>
    </StyledNavbar>
  );
};

export default DashboardNavbar;
