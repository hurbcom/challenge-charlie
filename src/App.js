import React from 'react';
import Background from './components/Background.js';
import Search from './components/Search.js';

import globalStyle from './style/globalStyle.css';

function App() {
  return (
    <>
      <div className='content-div'>
        <Search />
      </div>
      <Background />;
    </>
  );
}

export default App;
