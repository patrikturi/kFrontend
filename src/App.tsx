import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {PublicSite} from './components/public/PublicSite';
import {MemberSite} from './components/member/MemberSite';


function App() {
  const site = <PublicSite/>;
  return (
    <div className="App" style={{height: "100%"}}>
      {site}
    </div>
  );
}

export default App;
