import React, { useState, useEffect } from 'react';

import WeatherContent from '@/components/WeatherContent';
import { LocalityType } from '@/types/global';
import Spinner from '@/components/Spinner';

const Home = () => {
  const [locality, setLocality] = useState<LocalityType>();

  useEffect(() => {
    getGeolocation().then((res) => setLocality({ ...res }));
  }, []);

  async function getGeolocation(): Promise<LocalityType> {
    let localityData = JSON.parse(localStorage.getItem('locality') as string);

    if (!localityData) {
      const position = await getCurrentPosition();
      const { latitude, longitude } = position.coords;
      localityData = { latitude, longitude };
      localStorage.setItem('locality', JSON.stringify(localityData));
    }

    return localityData;
  }

  async function getCurrentPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  return (
    <div className={`flex flex-col content-center max-w-full min-h-screen`}>
      {locality ? (
        <WeatherContent {...locality} />
      ) : (
        <div className="h-screen text-1xl flex-col bg-slate-300 bg-opacity-70 text-white shadow-lg md:mx-32 md:text-2xl lg:mx-80 lg:text-3xl">
          <div className="pt-32">
            <Spinner />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
