import React, { useEffect, Fragment, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from './globalStyles';
import { Section } from "./layout";
// import { fetchData } from './services/Resource';

const App = () => {

  const [pathBackground, setPathBackground] = useState('');

  useEffect(() => {
    // const { images } = await fetchData('https://cors-anywhere.herokuapp.com/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR');
    // setPathBackground(images[0].url);
  }, []);

  return (
    <Fragment>
      <Router>
        <GlobalStyle path={pathBackground} />
        <Section />
      </Router>
    </Fragment>
  );
};

export default App;