import React from 'react';
import { string } from 'prop-types';
import { Box, Icon, Text } from 'components/atoms';
import {
  DataBox,
  DataLocationBox,
  IconBox,
  Wrapper,
} from './style';


function MainWeather({ mainColor, secoundColor }) {
  return (
    <Box mainColor={mainColor} secoundColor={secoundColor} height={20}>
      <Wrapper>
        <IconBox>
          <Icon code="H" type="large" />
        </IconBox>
        <DataBox>
          <DataLocationBox>
            <Text type="large">24.4</Text>
            <Text type="small">Rio de Janeiro / RJ</Text>
            <Text type="small">Hoje</Text>
          </DataLocationBox>
          <DataLocationBox>
            <Text type="medium">tempestades isoladas</Text>
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
};

MainWeather.defaultProps = {
  secoundColor: null,
};


export default MainWeather;
