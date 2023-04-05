import React, { useEffect, useState, useCallback } from 'react';
import { WeatherContentPayload } from '@/types/payload';
import Spinner from '@/components/Spinner';

import dayjs from 'dayjs';
import { LocalityType } from '@/types/global';

const WeatherContent = ({ latitude, longitude }: LocalityType) => {
  const [inputValue, setInputValue] = useState('');
  const [placeholderValue, setPlaceholderValue] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherContentPayload | null>();

  const handleInput = useCallback(
    async (key: string) => {
      if (key === 'Enter' && inputValue) {
        setWeatherData(null);
        setInputValue('');
        const geometry = await getLocationGeometry();
        const weatherData = await getWeatherData(geometry.lat, geometry.lng);
        setWeatherData(weatherData);
      }
    },
    [inputValue]
  );

  useEffect(() => {
    if (!weatherData) {
      getWeatherData(latitude, longitude).then(setWeatherData);
      getLocationGeometry(latitude, longitude);
    }
  }, [weatherData, latitude, longitude]);

  const getLocationGeometry = async (
    latitude = '0',
    longitude = '0'
  ): Promise<{ lat: string; lng: string }> => {
    let url = inputValue
      ? `/api/locality?address=${inputValue}`
      : `/api/locality?latitude=${latitude}&longitude=${longitude}`;
    const res = await fetch(url);
    const { geometry, formatted } = await res.json();
    setPlaceholderValue(formatted);
    return geometry;
  };

  const getWeatherData = async (lat: string, lng: string) => {
    const res = await fetch(`/api/forecast?latitude=${lat}&longitude=${lng}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        today: dayjs().format('YYYY-MM-DD'),
      }),
    });
    return res.json();
  };

  return (
    <div className="flex min-h-screen w-full bg-transparent">
      <div
        id="content"
        className="lg:mx-80 md:mx-32 w-screen flex-col lg:text-3xl md:text-2xl text-1xl shadow-lg text-white bg-slate-300 bg-opacity-70"
      >
        <div id="input" className="flex text-slate-600 bg-white">
          <p className="text-center py-5 font-['MeteoconsRegular'] w-1/6 text-5xl">(</p>
          <input
            placeholder={placeholderValue}
            className="p-5 w-5/6"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => handleInput(e.key)}
          />
        </div>
        {weatherData?.geolocation && weatherData?.forecast ? (
          weatherData.forecast.map((e, index) => {
            return (
              <>
                {e.dayText.toUpperCase() === 'HOJE' ? (
                  <div id="currentDay" className={`flex bg-${e.tempColor}-300 bg-opacity-70`}>
                    <div id="weatherIcon" className="flex-row w-1/2">
                      <img
                        src={`https://openweathermap.org/img/wn/${e.icon}@4x.png`}
                        width="300"
                        height="300"
                        alt="weather"
                      />
                    </div>
                    <div id="currentWeather" className="flex-row my-20 w-1/2">
                      <ul className="">
                        <li>{e.dayText}</li>
                        <li>{e.temp}</li>
                        <li className="mt-10 mb-5">{e.description}</li>
                        <li className="lg:text-2xl md:text-1xl text-base">vento: {e.windFull}</li>
                        <li className="lg:text-2xl md:text-1xl text-base">
                          humidade: {e.humidity}
                        </li>
                        <li className="lg:text-2xl md:text-1xl text-base">perssão: {e.pressure}</li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`flex w-full pt-5 pb-10 bg-${e.tempColor}-${
                      index <= 1 ? 500 : 600
                    } bg-opacity-70`}
                  >
                    <div className="w-1/2"></div>
                    <div className="w-1/2">
                      <p>{e.dayText}</p>
                      <p>{e.temp}</p>
                    </div>
                  </div>
                )}
              </>
            );
          })
        ) : (
          <div className={`w-full h-full`}>
            <div className="pt-32">
              <Spinner />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherContent;
