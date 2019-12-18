import React, { useState, useEffect } from 'react';
import css from './App.module.css';
import BingImage from '../../utils/BingImage.util';

import Weather from '../Weather/Weather';

function App() {

  const [bgImage, setBgImage] = useState('');

  const init = async () => {
    try {
      const i = await BingImage.get();
      setBgImage(i);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => { init() });

  return (
    <div className={css.App} style={{ 'backgroundImage': `url(${bgImage})` }}>
      <Weather />
    </div>
  );
}

export default App;
