import React, { Suspense } from 'react';
import {TopHeader} from './TopHeader';
import {Navbar} from './Navbar';
import {PageBase} from './PageBase';
import { BrowserRouter as Router } from 'react-router-dom';

export const PublicSite = () => {
    return (
        <div className="container-fluid height-full bg-light px-0">
          <Router>
            <TopHeader />
            <Suspense fallback="loading">
              <Navbar />
            </Suspense>
            <PageBase />
          </Router>
        </div>
    );
}