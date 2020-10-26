import React from 'react';

export const WeatherIcon = ({ sunrise, sunset, weatherId }: { sunrise: number; sunset: number; weatherId: number }) => {
  if (!sunrise || !sunset || !weatherId) return null;

  const getIconClass = () => {
    const date = new Date();
    const sunriseDate = new Date(sunrise * 1000); //Convert a Unix timestamp to time
    const sunsetDate = new Date(sunset * 1000);

    /* Get suitable icon for weather */
    if (date.getHours() >= sunriseDate.getHours() && date.getHours() < sunsetDate.getHours()) {
      return `wi wi-owm-day-${weatherId}`;
    } else {
      return `wi wi-owm-night-${weatherId}`;
    }
  };

  return <i className={getIconClass()} style={{ fontSize: 'calc(80px + 10vw)' }} />;
};
