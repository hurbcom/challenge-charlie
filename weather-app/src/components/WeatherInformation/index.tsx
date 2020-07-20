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
    <>
      <strong>{description}</strong>

      <p>
        {`Vento: ${windDirection} ${windSpeed}km/h`}
        <br />
        {`Humidade: ${humidity}%`}
        <br />
        {`Pressão: ${pressure}hPA`}
      </p>
    </>
  );
};

export default WeatherInformation;
