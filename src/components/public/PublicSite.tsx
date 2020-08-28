import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import {Container} from 'react-bootstrap';

import {Navbar} from './Navbar';
import {PageBase} from './PageBase';


export const PublicSite = () => {

  const PageWrapper = styled.div`
    display: flex;
    background-color: #f8f9fc;
    width: 100%;
  `;

    return (
      <PageWrapper>
        <Container className="bg-light px-0" fluid>
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
}
