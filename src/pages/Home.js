import axios from 'axios';
import React from 'react';
import MainView from '../components/MainView';
import { TemperatureStore } from '../context/TemperatureContext';
import './style/Home.css';

const Home = () => {
  const [wallpaperUrl, setWallpaperUrl] = React.useState('');

  axios({
    url: 'https://api.allorigins.win/get',
    params: {
      url: 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR'
    }
  }).then(async (response) => {
    const jsonContent = JSON.parse(response.data.contents);
    setWallpaperUrl(`https://www.bing.com${jsonContent.images[0].url}`);
  });

  return (
    <div className="home" style={{ backgroundImage: `url(${wallpaperUrl})` }}>
      <TemperatureStore>
        <MainView />
      </TemperatureStore>
    </div>
  );
};

export default Home;
