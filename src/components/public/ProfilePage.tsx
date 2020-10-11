import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useFetch } from 'react-use-fetch-ts';
import { getProfileConfig, PlayerProfile } from '../../common/fetchConfig';
import Spinner from '../common/Spinner';
import { useLocation } from 'react-router-dom';

const Panel = styled.div`
  margin: 0 auto;
  background-color: black;
  border-radius: 25px;
  padding-bottom: 45px;
  color: white;
  padding: 20px;
`;

const GoBack = styled.div`
  margin-top: 30px;
  margin-left: 45px;
  color: white;
`;

const ProfilePicture = styled.img`
  border: 2px solid white;
`;

const renderProfile = (profileData: PlayerProfile): JSX.Element => {
  const user_details = profileData.user_details;
  let paragraphs: JSX.Element[] = [];
  if (user_details.length > 0 && user_details[0].biography) {
    paragraphs = user_details[0].biography.split('\n').map(
      (par: string): JSX.Element => (
        <>
          {par}
          <br />
        </>
      )
    );
  }

  return (
    <>
      <h2>{profileData.username}</h2>
      <ProfilePicture src={profileData.profile_picture_url} alt="profile" />
      <h3>Introduction</h3>
      <p>{profileData.introduction}</p>
      <h3>Profile</h3>
      <p>{paragraphs}</p>
      <h3>Stats</h3>
      <p>
        Matches: {profileData.matches}, Goals: {profileData.goals}, Assists:{' '}
        {profileData.assists}, kCoins: {profileData.kcoins}
      </p>
      <p>Joined: {profileData.date_joined.split('T')[0]}</p>
    </>
  );
};

const ProfilePage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  let parts = location.pathname.split('/');
  var profileId = parts.pop() || parts.pop();

  const [fetchProfileState] = useFetch(getProfileConfig, [profileId!]);

  const handleGoBack = () => {
    history.goBack();
  };

  let displayProfile: JSX.Element = <div></div>;

  if (fetchProfileState.loading) {
    displayProfile = <Spinner />;
  } else if (fetchProfileState.error) {
    if (fetchProfileState.responseStatus === 404) {
      displayProfile = <div>No such user.</div>;
    } else {
      displayProfile = <div>Failed to load profile.</div>;
    }
  } else if (fetchProfileState.result) {
    displayProfile = renderProfile(fetchProfileState.result);
  }

  return (
    <Row className="pt-5 pb-5 m-0">
      <GoBack>
        <div onClick={handleGoBack}>
          <FontAwesomeIcon icon={faAngleDoubleLeft} size="lg" />
        </div>{' '}
        Go back
      </GoBack>
      <Panel className="col-md-8 text-left">{displayProfile}</Panel>
    </Row>
  );
};

export default ProfilePage;
