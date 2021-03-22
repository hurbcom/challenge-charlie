import React, { useState, useEffect } from 'react';
import Header from './Molecules/Header';
import Weather from './Organisms/Weather'

import './Styles/Scss/App.scss'

function App() {
  const [data, setData] = useState([]);
  const host = 'https://www.bing.com/';
  const divStyle = {
    backgroundImage: `url('${host}${data?.url})`,
  };

  useEffect(() => {
    const url = `${host}HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`;

    fetch(url)
      .then(response => response.json())
      .then(data => setData(data.images[0]))
      .catch(err => console.log(err, 'error'))
  }, [])
  
  return (
    <>
      {
        data?.url ?

          <main className="main" style={divStyle}>
            <Header />
            <Weather />
          </main>
          :
          <main className="main">
            <Header />
            <Weather />
          </main>
      }
    </>
  )
}

export default App;
