import React from 'react';
import { string } from 'prop-types';
import { Box } from 'components/atoms';


function MainWeather({ mainColor, secoundColor }) {
  return (
    <Box mainColor={mainColor} secoundColor={secoundColor} height={20}>
      <p>MainWeather</p>
    </Box>
  );
}

MainWeather.propTypes = {
  mainColor: string.isRequired,
  secoundColor: string,
};

MainWeather.defaultProps = {
  secoundColor: null,
};


export default MainWeather;
