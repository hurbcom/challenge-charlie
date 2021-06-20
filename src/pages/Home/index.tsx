import React from 'react';

import WeatherCard from '@components/WeatherCard';

const Home: React.FC = () => (
  <div className="home">
    <WeatherCard />
    {/* <div className="weather-card">
      <div className="cities-input">
        <input className="input" />
        <i className="icon">icon</i>
      </div>

      <div className="today">
        <p>Day</p>
        <p>ºC</p>
        <p>Ensolarado</p>

        <small>vento: x</small>
        <small>vento: x</small>
        <small>vento: x</small>
      </div>

      <div className="tomorrow">
        <p>Day</p>
        <p>ºC</p>
      </div>

      <div className="after-tomorrow">
        <p>Day</p>
        <p>ºC</p>
      </div>
    </div> */}
  </div>
);

export default Home;
