import React, { useEffect, Fragment, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from './globalStyles';
import { Main } from "./layout";
import { fetchData } from './services/Resource';

const App = () => {

  const [pathBackground, setPathBackground] = useState('');

  useEffect(() => {
    fetchBackground();
  }, []);

  const fetchBackground = async () => {
    const response = await fetchData('https://cors-anywhere.herokuapp.com/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR');
    console.log(response)
    // setPathBackground(images[0].url);
  }

  return (
    <Fragment>
      <Router>
        <GlobalStyle path={pathBackground} />
        <Main />
      </Router>
    </Fragment>
  );
};

export default App;