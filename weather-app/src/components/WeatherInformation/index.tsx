import React from 'react';

interface WeatherInformationProps {
  description?: string;
  windDirection?: string;
  windSpeed?: number | string;
  humidity?: number | string;
  pressure?: number | string;
}

const WeatherInformation: React.FC<WeatherInformationProps> = ({
  description,
  windDirection,
  windSpeed,
  humidity,
  pressure,
}) => {
  return (
    <div>
      <strong>{description}</strong>

      <p>{`Vento: ${windDirection} ${windSpeed}km/h`}</p>
      <p>{`Humidade: ${humidity}%`}</p>
      <p>{`Pressão: ${pressure}hPA`}</p>
    </div>
  );
};

export default WeatherInformation;
