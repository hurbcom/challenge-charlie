import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import '@/styles/global.css';

import NavBar from '@/components/NavBar';
import About from '@/pages/about';
import Home from '@/pages/home';

const Router = (): JSX.Element => {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="styles.css" />
      </head>
      <body>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Outlet />
              </>
            }
          >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </body>
    </html>
  );
};

export default Router;
