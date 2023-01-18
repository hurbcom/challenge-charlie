import React from 'react';
import DayAfterTomorrow from './DayAfterTomorrow';
import Header from './Header';
import './style/MainView.css';
import Today from './Today';
import Tomorrow from './Tomorrow';

const MainView = () => {
  return (
    <section className="main-view">
      <Header />
      <Today />
      <Tomorrow />
      <DayAfterTomorrow />
    </section>
  );
};

export default MainView;
