import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { Navbar } from './navbar/Navbar';
import { PageBase } from './PageBase';
import { NAVBAR_HEIGHT } from '../../common/styles';

import DegradeLarge from '../../img/degrade_large.png';
import DegradeInverseLarge from '../../img/degrade_inverse_large.png';

const PageWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Darkener = styled.div`
  position: absolute;
  top: ${NAVBAR_HEIGHT};
  bottom: 0;
  right: 0;
  width: 832px;
  height: calc(1080px - ${NAVBAR_HEIGHT});
  background-color: rgba(0, 0, 0, 0.2);
`;

const degradeWidth = '664px';
const degradeHeight = '968px';

const Degrade = styled.div`
  position: absolute;
  top: ${NAVBAR_HEIGHT};
  right: 832px;
  background-image: url(${DegradeLarge});
  background-size: ${degradeWidth} ${degradeHeight};
  width: ${degradeWidth};
  height: ${degradeHeight};
`;

const DegradeInverse = styled.div`
  position: absolute;
  top: ${NAVBAR_HEIGHT};
  right: 832px;
  background-image: url(${DegradeInverseLarge});
  background-size: ${degradeWidth} ${degradeHeight};
  opacity: 0.2;
  width: ${degradeWidth};
  height: ${degradeHeight};
`;

export const PublicSite: React.FC = () => {
  return (
    <PageWrapper>
      <Container className="px-0" fluid>
        <Darkener />
        <Degrade />
        <DegradeInverse />
        <Router>
          <Suspense fallback="Loading">
            <Navbar />
          </Suspense>
          <Suspense fallback="Loading">
            <PageBase />
          </Suspense>
        </Router>
      </Container>
    </PageWrapper>
  );
};
