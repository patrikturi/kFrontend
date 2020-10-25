import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import styled from 'styled-components';

import { Site } from './components/Site';
import { SiteContextProvider } from './context/SiteContext';

import './fonts/stylesheet.css';

declare global {
  const getCookie: getCookieMethod;
}

const StyledApp = styled.div`
  min-height: 100%;
`;

function App() {
  return (
    <StyledApp className="App">
      <SiteContextProvider>
        <Site />
      </SiteContextProvider>
    </StyledApp>
  );
}

export default App;
