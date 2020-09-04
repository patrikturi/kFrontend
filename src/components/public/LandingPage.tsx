import React, { useState } from 'react';
import { RegistrationForm } from './RegistrationForm';
// import { Trans, useTranslation } from 'react-i18next';
import SearchPlayerInput from './SearchPlayerInput';
import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../common/styles';
import { WIDTH_XS, WIDTH_WX } from '../../common/styles';
import { WIDTH_MD } from '../../common/styles';

import TitleBePart from '../../img/title_be_part.png';
import TitleJoinUs from '../../img/title_join_us.png';

const TitlePart1 = styled.div`
  margin-top: 40px;

  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 0px;

  max-width: 500px;
  height: 141px;

  background-image: url(${TitleBePart});
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-width: ${WIDTH_XS}) {
    margin-right: 300px;
    margin-left: auto;
    margin-bottom: 37px;
  }
  @media (min-width: ${WIDTH_WX}) {
  }
`;

const TitlePart2 = styled.div`
  margin-bottom: 0px;

  margin-left: 20px;
  margin-right: 20px;
  max-width: 905px;
  height: 145px;

  background-image: url(${TitleJoinUs});
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-width: ${WIDTH_XS}) {
    margin-right: 20px;
    margin-left: auto;
    margin-bottom: 37px;
  }
`;

const Container = styled.div`
  width: 100%;
`;

const Introduction = styled.div`
  font-family: montserratlight;
  font-size: 21px;
  text-shadow: 1px 1px 2px black;
  font-weight: bold;

  margin-left: 30px;
  margin-right: 30px;

  text-align: center;

  letter-spacing: 2px;
  color: ${PRIMARY_COLOR};

  margin-bottom: 34px;

  @media (min-width: ${WIDTH_MD}) {
    margin-right: 80px;
    margin-left: auto;
    max-width: 761px;
    margin-bottom: 30px;
  }
`;

const ButtonRow = styled.div`
  @media (min-width: ${WIDTH_MD}) {
    margin-right: 80px;
    margin-left: auto;
    max-width: 850px;
  }
`;

const LoginButton = styled.div`
  height: 62px;
  border-radius: 30px;
  width: 80%;
  background-color: #42bb77;

  display: inline-block;
  position: relative;

  margin-left: 10%;
  margin-bottom: 10px;

  @media (min-width: ${WIDTH_XS}) {
    max-width: 337px;
  }
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
  width: 80%;
  background-color: #191b1b;

  display: inline-block;
  position: relative;

  margin-left: 10%;
  margin-bottom: 10px;

  @media (min-width: ${WIDTH_XS}) {
    max-width: 337px;
  }
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

export const LandingPage: React.FC = () => {
  // const { t, i18n } = useTranslation();

  const [isRegistering, setRegistering] = useState(false);

  // const handleRegisterNow = (e: React.FormEvent<HTMLElement>) => {
  //   e.preventDefault();
  //   setRegistering(true);
  // };

  const handleGoBack = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setRegistering(false);
  };

  ///font-weight: bold;
  const welcomeText = (
    <>
      <TitlePart1 />
      <TitlePart2 />
      <Introduction>
        kSoccer is a soccer system with focus on arcade gameplay: easy, fluid
        and fast - but not 100% realistic. In the moment we are on BETA version,
        doing tests and adjustments for a clean and perfect release. Looking for
        a new soccer concept on Second Life, but still inspired on old Second
        Football.
      </Introduction>
      <ButtonRow>
        <LoginButton>
          <LoginText>LOGIN</LoginText>
        </LoginButton>
        <RegisterButton>
          <RegisterText>REGISTER</RegisterText>
        </RegisterButton>
      </ButtonRow>
    </>
  );

  return (
    <>
      <SearchPlayerInput />
      <Container>
        {isRegistering ? (
          <RegistrationForm onGoBack={handleGoBack} />
        ) : (
          welcomeText
        )}
      </Container>
    </>
  );
};
