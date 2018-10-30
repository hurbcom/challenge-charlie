import React, { Component } from 'react';
import { func, instanceOf, string } from 'prop-types';
import {
  Box,
  Icon,
  Temperature,
  Text,
} from 'components/atoms';
import { Wrapper } from './style';


class SecondaryWeather extends Component {
  static propTypes = {
    day: instanceOf(Object),
    mainColor: string.isRequired,
    onChangeTemperature: func,
    secoundColor: string,
    selectedTemperature: string,
  };

  static defaultProps = {
    day: {},
    onChangeTemperature: null,
    secoundColor: null,
    selectedTemperature: 'C',
  };

  handleChangeTemperature = () => {
    const { onChangeTemperature } = this.props;
    if (!onChangeTemperature) return;
    onChangeTemperature();
  };

  render() {
    const {
      day, mainColor, secoundColor, selectedTemperature,
    } = this.props;
    const currentTemperature = day.temperature ? day.temperature[selectedTemperature] : null;
    return (
      <Box mainColor={mainColor} secoundColor={secoundColor} height={5}>
        <Wrapper>
          { day.day && <Text type="medium">{day.day}</Text> }
          { day.image && <Icon code={day.image} type="medium" /> }
          {
            currentTemperature && (
              <Temperature textType="medium" onClick={this.handleChangeTemperature} type={selectedTemperature}>
                { currentTemperature }
              </Temperature>
            )
          }
        </Wrapper>
      </Box>
    );
  }
}


export default SecondaryWeather;
