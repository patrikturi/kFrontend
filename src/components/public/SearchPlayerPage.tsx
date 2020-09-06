import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, Row } from 'react-bootstrap';
import { PRIMARY_COLOR } from '../../common/styles';
import SearchPlayerInput from './SearchPlayerInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

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

const PlayerCard = styled(Card)`
  background-color: transparent;
  border: 1px solid white;
  margin-bottom: 15px;
`;

const CardBody = styled(Card.Body)``;

const CardCol1 = styled.div`
  height: 100%;
  display: inline-block;
  vertical-align: top;
`;

const CardCol2 = styled(CardCol1)`
  margin-left: 15px;
  width: calc(100% - 64px - 15px);
`;

const ProfilePicture = styled.div`
  width: 64px;
  height: 64px;
  background-size: 64px 64px;

  border: 2px solid white;
  border-radius: 5px;
`;

const PlayerName = styled.div`
  font-weight: bold;
`;

const PlayerIntroduction = styled.div``;

export const SearchPlayerPage = () => {
  const [value, setValue] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const handleClick = () => {
    setIsTyping(true);
  };

  const handleBlur = () => {
    setIsTyping(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!value) {
        setIsTyping(!isTyping);
      }
    }
  };

  const resultsData = [
    {
      profilePictureUrl:
        'https://my-secondlife-agni.akamaized.net/users/m4ximo/sl_image.png',
      username: 'Someguy',
      introduction:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      profilePictureUrl:
        'https://my-secondlife-agni.akamaized.net/users/hustler.levee/thumb_sl_image.png',
      username: 'Other Guy',
      introduction:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  const results = resultsData.map((result) => {
    return (
      <PlayerCard>
        <CardBody>
          <CardCol1>
            <ProfilePicture
              style={{ backgroundImage: `url(${result.profilePictureUrl})` }}
            />
          </CardCol1>
          <CardCol2>
            <PlayerName>
              {result.username} <a href="/profile/123456">=&gt;</a>
            </PlayerName>
            <PlayerIntroduction>{result.introduction}</PlayerIntroduction>
          </CardCol2>
        </CardBody>
      </PlayerCard>
    );
  });

  return (
    <>
      <Row className="pt-5 pb-5 m-0">
        <SearchPlayerInput
          isTyping={isTyping}
          value={value}
          onClick={handleClick}
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></SearchPlayerInput>
        <div style={{ flexBasis: '100%', height: '0' }}></div>
        <GoBack>
          <a href="/">
            <FontAwesomeIcon icon={faAngleDoubleLeft} size="lg" />
          </a>{' '}
          Go back
        </GoBack>
      </Row>
      <Row className="p-0 m-0">
        <Panel className="col-md-8 text-left">
          <h2 style={{ marginBottom: '30px' }}>Search Results</h2>
          {results}
        </Panel>
      </Row>
    </>
  );
};

export default SearchPlayerPage;
