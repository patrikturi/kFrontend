import React from 'react';
import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../common/styles';
import Totems from '../../img/totems.png';
import { Row } from 'react-bootstrap';

const Panel = styled.div`
  margin: 0 auto;
  background-color: black;
  border-radius: 25px;
  padding-bottom: 45px;
  color: white;
  padding: 20px;
`;

const Title = styled.h2`
  padding-top: 10px;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const Step = styled.p``;

const Num = styled.span`
  color: ${PRIMARY_COLOR};
  font-weight: bold;
`;

export const GettingStartedPage = () => {
  return (
    <Row className="pt-5 pb-5 m-0">
      <Panel className="col-md-8 text-left">
        <Title>Getting Started with kSoccer</Title>
        <Step>
          <Num>1.</Num> If you are not a <em>SecondLife</em> player,{' '}
          <a
            href="https://secondlife.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>{' '}
          to register and download the game
        </Step>
        <Step>
          <Num>2.</Num> Teleport to a soccer field in the game with{' '}
          <a
            href="http://maps.secondlife.com/secondlife/JHRA/213/167/22"
            target="_blank"
            rel="noopener noreferrer"
          >
            this link
          </a>{' '}
          or by entering the location <b>JHRA 213/167/22</b> manually
        </Step>
        <Step>
          <Num>3.</Num> Find the kSoccer totems and click one of them to get a
          new HUD.
        </Step>
        <p>The totems look like this:</p>
        <ImgWrapper>
          <img src={Totems} alt="Totems" style={{ maxWidth: '100%' }} />
        </ImgWrapper>
        <Step>
          <Num>4.</Num> Open your inventory (Ctrl+I), find the HUD and double
          click on it to equip it
        </Step>
        <Step>
          <Num>5.</Num> Go to the center of the field, left-click on the center
          spot to get a new ball
        </Step>
        <Step>
          <Num>6.</Num> Kick the ball with holding left click then releasing it
        </Step>
        Is that all? No...
        <ul>
          <li>
            Join our{' '}
            <em>
              <a
                href="https://discord.gg/NyVY7HY"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord community
              </a>
            </em>{' '}
            to meet other players and get help
          </li>
          <li>
            <a href="/">Register / Log in</a> to see your stats and manage your
            profile (not required to start playing the game)
          </li>
        </ul>
      </Panel>
    </Row>
  );
};
