import React from 'react';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import './style/Header.css';

const Header = ({ cityName }) => {
  return (
    <header className="header">
      <ExploreOutlinedIcon style={{ fontSize: '30px' }} />
      <p className="header__location">{cityName}</p>
    </header>
  );
};

export default Header;
