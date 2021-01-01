import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const TemperatureRangeContext = createContext({});

const temperatureRangeCodes = {
  COLD: 1,
  AVERAGE: 2,
  HOT: 3
};

export default function TemperatureRangeProvider({ children }) {
  const [temperatureRange, setTemperatureRange] = useState(temperatureRangeCodes.AVERAGE);

  return (
    <TemperatureRangeContext.Provider value={{ temperatureRange, setTemperatureRange }}>
      {children}
    </TemperatureRangeContext.Provider>
  );
}

TemperatureRangeProvider.propTypes = {
  children: PropTypes.node.isRequired
};
