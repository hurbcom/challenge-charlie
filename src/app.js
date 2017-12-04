import React from 'react';

import BingBg from './components/backgroundBing';
import WeatherSearch from './components/weatherSearch';
import './app.less';

export default () =>      
  <div className='app'>
    <BingBg />
    <WeatherSearch />
  </div>
