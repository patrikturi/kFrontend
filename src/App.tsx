import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import styled from 'styled-components';

import { Site } from './components/Site';
import { SiteContextProvider } from './context/SiteContext';

import './fonts/stylesheet.css';

function App() {

  const App = styled.div`
    min-height: 100%;
  `;

  return (
    <App className="App">
      <SiteContextProvider>
        <Site />
      </SiteContextProvider>
    </App>
  );
}

export default App;
