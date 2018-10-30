import React, { Component } from 'react';
import {
  func,
  number,
  oneOfType,
  string,
} from 'prop-types';
import { Text } from 'components/atoms';
import { TemperatureBox } from './style';


class Temperature extends Component {
  static propTypes = {
    children: oneOfType([number, string]).isRequired,
    onClick: func,
    textType: string,
    type: string,
  };

  static defaultProps = {
    onClick: null,
    textType: 'large',
    type: 'c',
  };

  handleClick = () => {
    const { onClick } = this.props;
    if (!onClick) return;
    onClick();
  };

  render() {
    const { children, textType, type } = this.props;
    const symbol = `°${type}`;
    return (
      <TemperatureBox onClick={this.handleClick}>
        <Text type={textType}>{ children }</Text>
        <Text type="small">{symbol}</Text>
      </TemperatureBox>
    );
  }
}


export default Temperature;
