import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import {Container} from 'react-bootstrap';
import {Navbar} from './Navbar';
import {PageBase} from './PageBase';

import KickingTheBall from '../../img/kicking_the_ball_large.jpg';

export const PublicSite = () => {

  const PageWrapper = styled.div`
    display: flex;
    width: 100%;
  `;

  const CustomContainer=styled(Container)`
    background-image: url(${KickingTheBall});
    background-size: 1920px 1080px;
  `;

    return (
      <PageWrapper>
        <CustomContainer className="bg-light px-0" fluid>
          <Router>
            <Suspense fallback="Loading">
              <Navbar />
            </Suspense>
            <Suspense fallback="Loading">
              <PageBase />
            </Suspense>
          </Router>
        </CustomContainer>
      </PageWrapper>
    );
}
