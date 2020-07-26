import React from 'react';

import WeatherCard from '../../components/WeatherCard';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';

const Home = () => {
  const [bgImg, setBgImg] = React.useState();

  React.useEffect(() => {
    getBingImg();
  }, []);

  const getBingImg = () => {
    return fetch('https://cors-anywhere.herokuapp.com/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR')
      .then(res => res.json())
      .then(data => {
        setBgImg(`https://www.bing.com${data.images[0].url}`);
      }).catch(err => console.log('err', err));
  }

  return (
    <BackgroundImage img={bgImg}>
      <WeatherCard />
    </BackgroundImage>
  );

}

export default Home;
