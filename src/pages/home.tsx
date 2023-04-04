import React, { useState, useEffect } from 'react';

import dayjs from 'dayjs';
import WeatherContent from '@/components/WeatherContent';

import { LocalityType } from '@/types/global';
import { WeatherContentPayload } from '@/types/payload';

const Home = () => {
  const [textColor, setTextColor] = useState('text-red-500');
  const [weatherData, setWeatherData] = useState<WeatherContentPayload | null>();

  useEffect(() => {
    getGeolocation().then((res: LocalityType) => {
      fetch(`/api/forecast?latitude=${res.latitude}&longitude=${res.longitude}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          today: dayjs().format('YYYY-MM-DD'),
        }),
      }).then(async (res) => {
        setWeatherData(await res.json());
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
    <div className={`flex flex-col content-center max-w-full min-h-screen`}>
      <WeatherContent {...(weatherData as WeatherContentPayload)} />
    </div>
  );
};

export default Home;
