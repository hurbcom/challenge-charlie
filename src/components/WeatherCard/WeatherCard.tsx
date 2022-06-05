import React, { useEffect } from "react";

import WeatherInput from "components/WeatherInput/WeatherInput";
import WeatherToday from "components/WeatherToday/WeatherToday";
import WeatherNextDays from "components/WeatherNextDays/WeatherNextDays";
import fetchUserLocation from "services/locationService";
import "components/WeatherCard/WeatherCard.scss";
import { useStore } from "store/store";
import { FormattedLocation } from "interfaces/FormattedLocation";

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

  useEffect(() => {
    if (userLocation.latitude) {
      fetchUserLocation(userLocation.latitude, userLocation.longitude).then(
        (formattedLocation: FormattedLocation) => {
          setUserLocation({
            ...userLocation,
            place: `${formattedLocation.city}, ${formattedLocation.state}, ${formattedLocation.country}`,
          });
        }
      );
    }
  }, [userLocation.latitude]);

  return (
    <div className="card">
      <WeatherInput location={userLocation.place} />
      <WeatherToday />
      <WeatherNextDays />
      <WeatherNextDays />
    </div>
  );
};

export default WeatherCard;
