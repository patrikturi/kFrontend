import React, { useState } from 'react';
import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../common/styles';
import Totems from '../../img/totems.png';
import { Row, Modal, Button } from 'react-bootstrap';
import { LOGIN_ENABLED } from '../../Settings';
import { useTranslation, Trans } from 'react-i18next';
import worldMap from '../../img/world_map_teleport.png';

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

const regionName = 'JHRA';
const coordinates = '194/153/3051';

export const GettingStartedPage = () => {
  const [showManualModal, setShowManualModal] = useState(false);
  const { t } = useTranslation();

  const handleShowManualModal = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setShowManualModal(true);
  };

  const handleCloseManualModal = (e: React.MouseEvent<HTMLElement>) => {
    setShowManualModal(false);
  };

  return (
    <Row className="pt-5 pb-5 m-0">
      <Panel className="col-md-8 text-left">
        <Title>{t('Getting Started with kSoccer')}</Title>
        <Step>
          <Num>1.</Num>{' '}
          <Trans>
            If you are not a <em>Second Life</em> player,{' '}
            <a
              href="https://secondlife.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              click here
            </a>{' '}
            to register and download the game
          </Trans>
        </Step>
        <Step>
          {/* FIXME: This does not take directly to the field! +is this the default field? */}
          <Num>2.</Num>{' '}
          <Trans>
            Teleport to a soccer field in the game with{' '}
            <a
              href={`http://maps.secondlife.com/secondlife/${regionName}/${coordinates}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              this link
            </a>{' '}
            or by entering the location{' '}
            <b>
              {regionName} {coordinates}
            </b>{' '}
            <a href="./" onClick={handleShowManualModal}>
              manually
            </a>
          </Trans>
        </Step>
        <Step>
          <Num>3.</Num>{' '}
          {t('Find the kSoccer totems and click one of them to get a new HUD')}
        </Step>
        <p>{t('The totems look like this')}:</p>
        <ImgWrapper>
          <img src={Totems} alt="Totems" style={{ maxWidth: '100%' }} />
        </ImgWrapper>
        <Step>
          <Num>4.</Num>{' '}
          {t(
            'Open your inventory (Ctrl+I), find the HUD and double click on it to equip it'
          )}
        </Step>
        <Step>
          <Num>5.</Num>{' '}
          {t(
            'Go to the center of the field, left-click on the center spot to get a new ball'
          )}
        </Step>
        <Step>
          <Num>6.</Num>{' '}
          {t('Kick the ball with holding left click then releasing it')}
        </Step>
        {t('Is that all? No')}...
        <ul>
          <li>
            <Trans>
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
            </Trans>
          </li>
          {LOGIN_ENABLED && (
            <li>
              <Trans>
                <a href="/register/">Register / Log in</a> to see your stats and
                manage your profile (not required to start playing)
              </Trans>
            </li>
          )}
        </ul>
        <Modal show={showManualModal} onHide={handleCloseManualModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{t('Teleport to a Location')}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {t('First press Ctrl+M to open the World Map')}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={worldMap} alt="World Map"></img>
            </div>
            {t('Then')}
            <ol>
              <li>
                {t('Enter region name')} ({regionName})
              </li>
              <li>{t('Click "Find"')}</li>
              <li>
                {t('Fill in the X, Y and Z coordinates of the Location')} (
                {coordinates})
              </li>
              <li>{t('Click "Teleport"')}</li>
            </ol>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleCloseManualModal}>
              {t('Close')}
            </Button>
          </Modal.Footer>
        </Modal>
      </Panel>
    </Row>
  );
};
