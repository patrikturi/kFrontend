import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useFetch } from 'react-use-fetch-ts';
import { getProfileConfig, PlayerProfile } from '../../common/fetchConfig';
import Spinner from '../common/Spinner';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { checkResponseErrors } from '../../common/utils';

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

const ProfilePage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const [message, setMessage] = useState('');
  const { t } = useTranslation();

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
        <h2>{profileData.display_name}</h2>
        <ProfilePicture src={profileData.profile_picture_url} alt="profile" />
        <h3>{t('Introduction')}</h3>
        <p>{profileData.introduction}</p>
        <h3>{t('Profile')}</h3>
        <p>{paragraphs}</p>
        <h3>{t('Stats')}</h3>
        <p>
          {t('Matches')}: {profileData.matches}, {t('Goals')}:{' '}
          {profileData.goals}, {t('Assists')}: {profileData.assists},{' '}
          {t('kCoins')}: {profileData.kcoins}
        </p>
        <p>
          {t('Joined')}: {profileData.date_joined.split('T')[0]}
        </p>
      </>
    );
  };

  let parts = location.pathname.split('/');
  var profileId = parts.pop() || parts.pop();

  const [fetchProfileState] = useFetch(getProfileConfig, [profileId!]);

  const handleGoBack = () => {
    history.goBack();
  };

  const responseStatus = fetchProfileState.responseStatus;

  useEffect(() => {
    if (responseStatus === 200 && !fetchProfileState.error) {
    } else if (responseStatus === 404) {
      setMessage(t('No such user'));
    } else {
      checkResponseErrors(fetchProfileState, t, setMessage);
    }
  }, [responseStatus, fetchProfileState, t]);

  let displayResults: JSX.Element = <div>{message}</div>;
  if (responseStatus === 200 && fetchProfileState.result) {
    displayResults = renderProfile(fetchProfileState.result);
  }

  return (
    <Row className="pt-5 pb-5 m-0">
      <GoBack>
        <div onClick={handleGoBack}>
          <FontAwesomeIcon icon={faAngleDoubleLeft} size="lg" />
        </div>{' '}
        {t('Go back')}
      </GoBack>
      <Panel className="col-md-8 text-left">
        {fetchProfileState.loading ? <Spinner /> : displayResults}
      </Panel>
    </Row>
  );
};

export default ProfilePage;
