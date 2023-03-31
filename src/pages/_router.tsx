/**
 * Main client routes module defined by react-router.
 */

import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import NavBar from '@/components/NavBar';
import About from '@/pages/about';
import Home from '@/pages/home';

const Router = (): JSX.Element => {
  return (
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
  );
};

export default Router;
