import React, { useState, useEffect } from 'react';

const Home = () => {
  const [textColor, setTextColor] = useState('text-red-500');
  const [locality, setLocality] = useState<{
    latitude: number | null;
    longitude: number | null;
  }>();

  useEffect(() => {
    if (localStorage.getItem('locality')) {
      const {latitude, longitude} = JSON.parse(localStorage.getItem('locality') as string)
      setLocality(JSON.parse(localStorage.getItem('locality') as string));
      fetch(`/api/locality?latitude=${latitude}&longitude=${longitude}`).then(async (res) => {
        console.log(await res.json());
      });
    }
    if (!localStorage.getItem('locality')) getLocation();
  }, []);

  async function getLocation() {
    return await new Promise((req, res) => {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocality({ latitude, longitude });
        localStorage.setItem('locality', JSON.stringify({ latitude, longitude }));
        res({ latitude, longitude });
      });
    });
  }

  const changeColor = () => {
    textColor === 'text-red-500' ? setTextColor('text-blue-500') : setTextColor('text-red-500');
  };
  return (
    <h1 className={textColor} onClick={() => changeColor()}>
      Home
    </h1>
  );
};

export default Home;
