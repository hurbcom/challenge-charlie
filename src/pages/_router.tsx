/**
 * Main client routes module defined by react-router.
 */

import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import Home from '@/pages/home';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
