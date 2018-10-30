import React from 'react';
import { string } from 'prop-types';
import {
  Box,
  Icon,
  Temperature,
  Text,
} from 'components/atoms';
import { Wrapper } from './style';


function SecondaryWeather({ mainColor, secoundColor }) {
  return (
    <Box mainColor={mainColor} secoundColor={secoundColor} height={5}>
      <Wrapper>
        <Text type="medium">Sáb</Text>
        <Icon code="H" type="medium" />
        <Temperature textType="medium">32.1</Temperature>
      </Wrapper>
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
