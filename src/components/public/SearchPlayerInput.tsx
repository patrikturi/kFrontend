import React from 'react';
import styled from 'styled-components';
import { WIDTH_XS } from '../../common/styles';
import SearchImg from '../../img/search_icon.png';

const Container = styled.div`
  display: block;
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

const Input = styled.input`
  background-color: transparent;
  height: 62px;
  width: 337px;
  padding: 0 30px;
  color: white;
  font-size: 20px;
  border-width: 0px;
  border: none;
  box-shadow: none;
  outline: none;
`;

interface Props {
  isTyping: boolean;
  value?: string;
  onClick?: (e: React.FormEvent<HTMLElement>) => void;
  onBlur?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchPlayerInput: React.FC<Props> = (props: Props) => {
  return (
    <Container onClick={props.onClick} onBlur={props.onBlur}>
      {props.isTyping || !!props.value ? (
        <Input
          value={props.value}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
          autoFocus
        ></Input>
      ) : (
        <>
          <SearchIcon src={SearchImg} alt="icon" />
          <SearchLabel>SEARCH A PLAYER</SearchLabel>
        </>
      )}
    </Container>
  );
};

export default SearchPlayerInput;
