import React from 'react';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import './style/Header.css';
import { TemperatureContext } from '../context/TemperatureContext';

const Header = ({ cityName }) => {
  const temperatureContext = React.useContext(TemperatureContext);

  const toggleFarenheit = () => {
    temperatureContext.setIsFarenheit(!temperatureContext.isFarenheit);
  };

  return (
    <header className="header">
      <ExploreOutlinedIcon style={{ fontSize: '30px' }} />
      <p className="header__location">{cityName ? cityName : 'Carregando...'}</p>
      <button className="header__btn-metric" onClick={toggleFarenheit}>
        {temperatureContext.isFarenheit ? '°F' : '°C'}
      </button>
    </header>
  );
};

export default Header;
