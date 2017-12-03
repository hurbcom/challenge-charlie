import React from 'react';

import BingBg from './components/backgroundBing';
import WeatherSearch from './components/weatherSearch';
import './App.less';

export default () =>      
  <div className='App'>
    <BingBg />
    <WeatherSearch />
  </div>
