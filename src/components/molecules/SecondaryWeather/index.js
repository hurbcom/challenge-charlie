import React from 'react';
import { instanceOf, string } from 'prop-types';
import {
  Box,
  Icon,
  Temperature,
  Text,
} from 'components/atoms';
import { Wrapper } from './style';


function SecondaryWeather({ mainColor, secoundColor, day }) {
  return (
    <Box mainColor={mainColor} secoundColor={secoundColor} height={5}>
      <Wrapper>
        { day.day && <Text type="medium">{day.day}</Text> }
        { day.image && <Icon code={day.image} type="medium" /> }
        { day.image && <Temperature textType="medium">32.1</Temperature> }
      </Wrapper>
    </Box>
  );
}

SecondaryWeather.propTypes = {
  day: instanceOf(Object),
  mainColor: string.isRequired,
  secoundColor: string,
};

SecondaryWeather.defaultProps = {
  day: {},
  secoundColor: null,
};


export default SecondaryWeather;
