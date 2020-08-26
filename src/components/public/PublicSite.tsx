import React, { Suspense } from 'react';
import {Navbar} from './Navbar';
import {PageBase} from './PageBase';
import { BrowserRouter as Router } from 'react-router-dom';

export const PublicSite = () => {
    return (
        <div className="container-fluid height-full bg-light px-0">
          <Router>
            <Suspense fallback="loading">
              <Navbar />
            </Suspense>
            <Suspense fallback="loading">
              <PageBase />
            </Suspense>
          </Router>
        </div>
    );
}