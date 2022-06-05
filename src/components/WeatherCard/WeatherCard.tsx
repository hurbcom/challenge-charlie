import React, { useEffect } from "react";

import WeatherInput from "components/WeatherInput/WeatherInput";
import WeatherToday from "components/WeatherToday/WeatherToday";
import { useStore } from "store/store";
import WeatherNextDays from "components/WeatherNextDays/WeatherNextDays";
import "components/WeatherCard/WeatherCard.scss";

const WeatherCard = () => {
  const { userLocation, setUserLocation } = useStore();
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  }, []);

  return (
    <div className="card">
      <WeatherInput />
      <WeatherToday />
      <WeatherNextDays />
      <WeatherNextDays />
    </div>
  );
};

export default WeatherCard;
