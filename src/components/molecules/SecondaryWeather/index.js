import React from 'react';
import { string } from 'prop-types';
import { Box } from 'components/atoms';


function SecondaryWeather({ mainColor, secoundColor }) {
  return (
    <Box mainColor={mainColor} secoundColor={secoundColor} height={5}>
      <p>SecondaryWeather</p>
    </Box>
  );
}

SecondaryWeather.propTypes = {
  mainColor: string.isRequired,
  secoundColor: string,
};

SecondaryWeather.defaultProps = {
  secoundColor: null,
};


export default SecondaryWeather;
