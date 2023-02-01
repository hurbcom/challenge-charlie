import './styles.css';
import { useEffect } from 'react';

export function BackgroundCover() {
  useEffect(() => {
    const fetchBingImage = async () => {
      fetch(
        'https://proxy.cors.sh/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR'
      )
        .then((response) => response.json())
        .then(console.log);
    };

    // fetchBingImage();
  }, []);

  return (
    <img
      className="background-cover__img"
      src="https://bing.com/th?id=OHR.SunriseCastle_PT-BR7193837721_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
      alt="title image"
    />
  );
}
