import React from 'react';
import './Layout.css';
import InputSearch from '../../components/InputSearch/InputSearch'
import CityCard from '../../components/CityCard/CityCard'

function Layout() {
  return (
    <div className="Container">
        <InputSearch />
        <CityCard />
        <CityCard />
        <CityCard />
    </div>
  );
}

export default Layout;
