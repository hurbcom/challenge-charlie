import React, { useState, useEffect } from 'react';

import dayjs from 'dayjs';
import { LocalityType } from '@/types/global';

const Home = () => {
  const [textColor, setTextColor] = useState('text-red-500');

  useEffect(() => {
    getGeolocation().then((res: LocalityType) => {
      fetch(`/api/locality?latitude=${res.latitude}&longitude=${res.longitude}`).then(
        async (res) => {
          console.log(await res.json());
        }
      );
      fetch(`/api/forecast?latitude=${res.latitude}&longitude=${res.longitude}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          today: dayjs().format('YYYY-MM-DD'),
        }),
      }).then(async (res) => {
        console.log(await res.json());
      });
    });
  }, []);

  async function getGeolocation(): Promise<LocalityType> {
    if (!localStorage.getItem('locality')) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        localStorage.setItem('locality', JSON.stringify({ latitude, longitude }));
      });
    }
    return await JSON.parse(localStorage.getItem('locality') as string);
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
