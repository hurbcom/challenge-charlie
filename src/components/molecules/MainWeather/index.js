import React from 'react';
import { instanceOf, string } from 'prop-types';
import {
  Box,
  Icon,
  Temperature,
  Text,
} from 'components/atoms';
import {
  DataBox,
  DataLocationBox,
  IconBox,
  Wrapper,
} from './style';


function MainWeather({ mainColor, secoundColor, weather }) {
  const { location, today } = weather;
  return (
    <Box mainColor={mainColor} secoundColor={secoundColor} height={22}>
      <Wrapper>
        <IconBox>
          <Icon code={today.image} type="large" />
        </IconBox>
        <DataBox>
          <DataLocationBox>
            <Temperature>24.2</Temperature>
            <Text type="small">{ `${location.city} / ${location.region}` }</Text>
            <Text type="small">Hoje</Text>
          </DataLocationBox>
          <DataLocationBox>
            <Text type="medium">{today.title}</Text>
            <Text type="small">Vento: 32.3km/h</Text>
            <Text type="small">Pressão: 0.3atm</Text>
            <Text type="small">Umidade: 24%</Text>
          </DataLocationBox>
        </DataBox>
      </Wrapper>
    </Box>
  );
}

MainWeather.propTypes = {
  mainColor: string.isRequired,
  secoundColor: string,
  weather: instanceOf(Object),
};

MainWeather.defaultProps = {
  secoundColor: null,
  weather: {},
};


export default MainWeather;
