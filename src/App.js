import React, { useState, useEffect } from 'react';
import axios from 'axios';

import GlobalStyle from './styles/global';
import WeatherForecast from './components/WeatherForecast';

const {
  REACT_APP_CORS_ANYWHERE: corsAnyWhere,
  REACT_APP_BING_API_URL: bingApiUrl
} = process.env;

function App() {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    fetchBingImage();
  }, []);

  const fetchBingImage = () => {
    axios.get(`${corsAnyWhere}${bingApiUrl}/HPImageArchive.aspx?format=js&idx=0&n=1`)
      .then(response => {
        setBackgroundImage(`${bingApiUrl}/${response.data.images[0].url}`);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <>
      <WeatherForecast />
      <GlobalStyle background={backgroundImage} />
    </>
  );
}

export default App;
