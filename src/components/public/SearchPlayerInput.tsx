import React from 'react';
import styled from 'styled-components';
import { NAVBAR_HEIGHT, WIDTH_XS } from '../../common/styles';
import SearchImg from '../../img/search_icon.png';

const Container = styled.div`
  margin-left: 10%;

  width: 80%;
  height: 62px;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.5);

  position: relative;

  @media (min-width: ${WIDTH_XS}) {
    margin-left: 45px;
    max-width: 337px;
  }
`;

const SearchLabel = styled.div`
  color: white;
  font-family: montserratmedium;
  font-size: 18px;
  letter-spacing: 2px;
  text-shadow: 0 0 5px black;

  width: 250px;

  position: absolute;
  top: 50%;
  left: 65%;
  transform: translate(-50%, -50%);
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
`;

const SearchPlayerInput: React.FC = () => {
  return (
    <Container>
      <SearchIcon src={SearchImg} alt="icon" />
      <SearchLabel>SEARCH A PLAYER</SearchLabel>
    </Container>
  );
};

export default SearchPlayerInput;
