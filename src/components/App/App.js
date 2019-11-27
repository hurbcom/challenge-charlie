import React, { useState } from 'react';
import css from './App.module.css';

import Weather from '../Weather/Weather'

function App() {
  const bgimage = useState('https://www.bing.com/th?id=OHR.PhoenixAirport_ROW1600879885_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp')[0]

  return (
    <div className={css.App} style={{ 'background-image': `url(${bgimage})` }}>
      <Weather />
    </div>
  );
}

export default App;
