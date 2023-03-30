import React, { ReactNode } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import NavBar from '@/components/NavBar';
import About from '@/pages/about';
import Home from '@/pages/home';

function Main() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

const Content = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
};

export default Content;
