import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import { func, instanceOf } from 'prop-types';
import {
  MainWeather,
  SearchInput,
  SecondaryWeather,
} from 'components/molecules';
import {
  bindActionCreators,
  connect,
  getWeatherByValue,
} from 'store/actions';
import { getColor } from 'helpers';
import { Box } from './style';


class WeatherBox extends Component {
  static propTypes = {
    getWeatherByValueAction: func.isRequired,
    theme: instanceOf(Object).isRequired,
    weather: instanceOf(Object).isRequired,
  };

  handleSubmit = (value) => {
    const { getWeatherByValueAction } = this.props;
    getWeatherByValueAction(value);
  };

  render() {
    const { theme, weather } = this.props;
    const { light, color, dark } = getColor(theme);
    const { location } = weather;
    return (
      <Box>
        <SearchInput onSubmit={this.handleSubmit} location={location} />
        <MainWeather mainColor={light} secoundColor={color} />
        <SecondaryWeather mainColor={color} secoundColor={dark} />
        <SecondaryWeather mainColor={dark} />
      </Box>
    );
  }
}

const mapStateToProps = ({ weather }) => ({
  weather,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getWeatherByValueAction: getWeatherByValue,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(withTheme(WeatherBox));
