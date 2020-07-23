import React from 'react';
import {TopHeader} from './TopHeader';
import {Navbar} from './Navbar';
import {PageBase} from './PageBase';
import { BrowserRouter as Router } from 'react-router-dom';

export const PublicSite = () => {
    return (
        <div style={{height: "100%"}}>
          <Router>
            <TopHeader />
            <Navbar />
            <PageBase />
          </Router>
        </div>
    );
}