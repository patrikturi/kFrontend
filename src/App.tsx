import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {SiteContextProvider} from './context/SiteContext';
import {Site} from './components/Site';


function App() {
  return (
    <div className="App" style={{height: "100%"}}>
      <SiteContextProvider>
        <Site />
      </SiteContextProvider>
    </div>
  );
}

export default App;
