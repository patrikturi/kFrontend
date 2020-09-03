import React, { useState } from 'react';
import { RegistrationForm } from './RegistrationForm';
import { LOGIN_ENABLED } from '../../Settings';
import { Trans, useTranslation } from 'react-i18next';
import SearchPlayerInput from './SearchPlayerInput';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import { PRIMARY_COLOR } from '../../common/styles';

import TitleBePart from '../../img/title_be_part.png';
import TitleJoinUs from '../../img/title_join_us.png';

export const LandingPage = () => {
  const { t, i18n } = useTranslation();

  const [isRegistering, setRegistering] = useState(false);

  const handleRegisterNow = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setRegistering(true);
  };

  const handleGoBack = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setRegistering(false);
  };

  const TitlePart1 = styled.img`
    margin-top: 195px;
    margin-left: 20px;
    margin-bottom: 37px;
  `;
  const TitlePart2 = styled.img`
    margin-bottom: 37px;
    display: block;
  `;

  const Container = styled.div`
    margin-left: 935px;
  `;

  const Introduction = styled.div`
    font-family: montserratlight;
    font-size: 21px;
    text-shadow: 0 0 5px rgba(227, 193, 144, 1);

    width: 761px;
    margin-left: 75px;
    text-align: center;

    letter-spacing: 2px;
    color: ${PRIMARY_COLOR};

    margin-bottom: 34px;
  `;

  const LoginButton = styled.div`
    height: 62px;
    border-radius: 30px;
    width: 337px;
    background-color: #42bb77;

    display: inline-block;
    position: relative;

    margin-left: calc(75px + 28px);
  `;

  const LoginText = styled.div`
    font-family: montserratmedium;
    font-size: 24px;
    letter-spacing: 3px;
    color: white;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  const RegisterButton = styled.div`
    height: 62px;
    border-radius: 30px;
    width: 337px;
    background-color: #191b1b;

    display: inline-block;
    position: relative;

    margin-left: 45px;
  `;

  const RegisterText = styled.div`
    font-family: montserratmedium;
    font-size: 24px;
    letter-spacing: 3px;
    color: white;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  ///font-weight: bold;
  const welcomeText = (
    <>
      <TitlePart1 src={TitleBePart} alt="Be part" />
      <TitlePart2 src={TitleJoinUs} alt="Join us" />
      <Introduction>
        kSoccer is a soccer system with focus on arcade gameplay: easy, fluid
        and fast - but not 100% realistic. In the moment we are on BETA version,
        doing tests and adjustments for a clean and perfect release. Looking for
        a new soccer concept on Second Life, but still inspired on old Second
        Football.
      </Introduction>
      <LoginButton>
        <LoginText>LOGIN</LoginText>
      </LoginButton>
      <RegisterButton>
        <RegisterText>REGISTER</RegisterText>
      </RegisterButton>
    </>
  );

  return (
    <>
      <SearchPlayerInput />
      <Col>
        <Container>
          {isRegistering ? (
            <RegistrationForm onGoBack={handleGoBack} />
          ) : (
            welcomeText
          )}
        </Container>
      </Col>
    </>
  );
};
