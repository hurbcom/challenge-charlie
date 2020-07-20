import React from 'react';

interface TemperatureProps {
  day?: string;
  showAsFahrenheit: boolean;
  celsius?: number;
  fahrenheit?: number;
  toggleCallback(): void;
}

const Temperature: React.FC<TemperatureProps> = ({
  day,
  showAsFahrenheit,
  celsius,
  fahrenheit,
  toggleCallback,
  ...rest
}) => {
  return (
    <strong
      onClick={toggleCallback}
      title="Clique para mudar o modo de exibição"
      {...rest}
    >
      {day}
      <br />
      {showAsFahrenheit ? `${fahrenheit}°F` : `${celsius}°C`}
    </strong>
  );
};

export default Temperature;
