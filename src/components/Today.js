import React from 'react';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import './style/Today.css';

const Today = () => {
  return (
    <div className="today">
      <div className="today__icon-container">
        <WbSunnyOutlinedIcon style={{ fontSize: '180px' }} />
      </div>
      <div className="today__info">
        <p className="today__info__title">Hoje</p>
        <p className="today__info__temperature">32C</p>
        <p className="today__info__wheater">Ensolarado</p>
        <p>Vento: NO 6.4km/h</p>
        <p>Humidade: 78%</p>
        <p>Pressao: 1003hPA</p>
      </div>
    </div>
  );
};

export default Today;
