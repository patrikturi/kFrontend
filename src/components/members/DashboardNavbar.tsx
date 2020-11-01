import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import {
  Navbar as BootstrapNavbar,
  Dropdown,
  NavDropdown,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { logoutConfig } from '../../common/fetchConfig';
import { useFetch } from 'react-use-fetch-ts';
import { useHistory } from 'react-router-dom';
import { SiteContext } from '../../context/SiteContext';
import { getMyProfileConfig } from '../../common/fetchConfig';
import { useTranslation } from 'react-i18next';
import { checkResponseErrorsWithLogout } from '../../common/utils';

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
  const [logoutResult, logout] = useFetch(logoutConfig);
  const [context, dispatch] = useContext(SiteContext);
  const [getProfileResult, getProfile] = useFetch(getMyProfileConfig);
  const history = useHistory();
  const { t } = useTranslation();

  let displayName = localStorage.getItem('displayName');
  let profilePictureUrl = localStorage.getItem('profilePictureUrl');

  useEffect(() => {
    if (!context.isProfileLoaded) {
      const storedUserId = localStorage.getItem('userId');
      if (storedUserId) {
        getProfile();
        dispatch({ type: 'SET_LOADING' });
      } else {
        dispatch({ type: 'LOGOUT_SUCCESS' });
        history.push('/login/');
      }
    }
  }, [
    context.isProfileLoaded,
    context.username,
    dispatch,
    getProfile,
    history,
  ]);

  useEffect(() => {
    const setMessage = (message: string) => {
      dispatch({
        type: 'SET_ERROR_MESSAGE',
        data: message,
      });
    };
    const responseStatus = getProfileResult.responseStatus;

    if (responseStatus) {
      dispatch({ type: 'CLEAR_LOADING' });
    }

    if (responseStatus === 200 && !getProfileResult.error) {
      dispatch({ type: 'SET_PROFILE', data: getProfileResult.result });
      setMessage('');
    } else {
      const res = getProfileResult;
      checkResponseErrorsWithLogout(res, t, dispatch, history, setMessage);
    }
  }, [history, dispatch, getProfileResult, t]);

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    if (context.displayName && displayName !== context.displayName) {
      logout();
    }
  }, [displayName, context.displayName, logout]);

  useEffect(() => {
    if (logoutResult.responseStatus === 200) {
      dispatch({ type: 'LOGOUT_SUCCESS' });
      history.push('/');
    }
  }, [dispatch, history, logoutResult]);

  const DropdownTitle = (
    <StyledDropdownTitle>
      {displayName}
      <ProfilePicture
        src={profilePictureUrl || ''}
        alt="Profile picture"
        width="48px"
        height="48px"
      ></ProfilePicture>
    </StyledDropdownTitle>
  );

  return (
    <StyledNavbar id="dashboard-nav">
      <StyledNavDropdown title={DropdownTitle} alignRight={true}>
        <LinkContainer to="/dashboard/profile/">
          <StyledDropdownItem key="edit-profile">
            <StyledIcon icon={faUser} />
            {t('Edit Profile')}
          </StyledDropdownItem>
        </LinkContainer>
        <LinkContainer to="/dashboard/password-change/">
          <StyledDropdownItem key="change-password">
            <StyledIcon icon={faKey} />
            {t('Change Password')}
          </StyledDropdownItem>
        </LinkContainer>
        <NavDropdown.Divider />
        <StyledDropdownItem key="logout" onSelect={handleLogout}>
          <StyledIcon icon={faSignOutAlt} />
          {t('Logout')}
        </StyledDropdownItem>
      </StyledNavDropdown>
    </StyledNavbar>
  );
};

export default DashboardNavbar;
