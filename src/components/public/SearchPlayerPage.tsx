import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card, Row } from 'react-bootstrap';
import { PRIMARY_COLOR } from '../../common/styles';
import SearchPlayerInput from './SearchPlayerInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { searchConfig, SearchResult } from '../../common/fetchConfig';
import { useFetch } from 'react-use-fetch-ts';
import Spinner from '../common/Spinner';

const Panel = styled.div`
  margin: 0 auto;
  background-color: black;
  border-radius: 25px;
  padding-bottom: 45px;
  color: white;
  padding: 20px;
  min-height: 250px;
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
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const [searchResult, search] = useFetch(searchConfig);

  if (searchResult.error) {
    console.log(`Error: ${searchResult.errorResult}`);
  }

  const handleClick = () => {
    setIsTyping(true);
  };

  const handleBlur = () => {
    setIsTyping(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!inputValue) {
        setIsTyping(!isTyping);
      } else {
        search(inputValue);
      }
    }
  };

  let results: any = [];

  const resultsData = searchResult.result;
  if (resultsData !== undefined) {
    results = resultsData.map((result: SearchResult) => {
      return (
        <PlayerCard key={result.id}>
          <CardBody>
            <CardCol1>
              <ProfilePicture
                style={{
                  backgroundImage: `url(${result.profile_picture_url})`,
                }}
              />
            </CardCol1>
            <CardCol2>
              <PlayerName>
                <a href={`/profile/${result.id}`} style={{ color: 'white' }}>
                  {result.display_name}
                </a>
              </PlayerName>
              <PlayerIntroduction>{result.introduction}</PlayerIntroduction>
            </CardCol2>
          </CardBody>
        </PlayerCard>
      );
    });
  }

  let displayResults: JSX.Element = <></>;

  if (searchResult.loading) {
    displayResults = <Spinner />;
  } else if (searchResult.error) {
    if (searchResult.responseStatus === 400) {
      displayResults = <div>Search term too short, try a longer one</div>;
    } else {
      displayResults = <div>Search failed. Please try again later.</div>;
    }
  } else if (searchResult.result) {
    displayResults = results.length === 0 ? <div>No results</div> : results;
  } else {
    displayResults = <div>No results yet</div>;
  }

  return (
    <>
      <Row className="pt-5 pb-5 m-0">
        <SearchPlayerInput
          isTyping={isTyping}
          value={inputValue}
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
          {displayResults}
        </Panel>
      </Row>
    </>
  );
};

export default SearchPlayerPage;
