import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import { func, instanceOf, string } from 'prop-types';
import {
  MainWeather,
  Message,
  SearchInput,
  SecondaryWeather,
} from 'components/molecules';
import {
  bindActionCreators,
  connect,
  getWeatherByValue,
} from 'store/actions';
import { UI } from 'store/constants';
import { getColor } from 'helpers';
import { Box } from './style';


class WeatherBox extends Component {
  static propTypes = {
    getWeatherByValueAction: func.isRequired,
    uiState: string.isRequired,
    theme: instanceOf(Object).isRequired,
    weather: instanceOf(Object).isRequired,
  };

  handleSubmit = (value) => {
    const { getWeatherByValueAction } = this.props;
    getWeatherByValueAction(value);
  };

  renderMainWeather = (light, color) => {
    const { uiState, weather } = this.props;
    switch (uiState) {
      case UI.NO_DATA:
        return (
          <Message mainColor={light} secoundColor={color}>
            Por favor, informe uma localidade.
          </Message>
        );
      case UI.SHOW_WEATHER:
        return (
          <MainWeather
            mainColor={light}
            secoundColor={color}
            weather={weather}
          />
        );
      default:
        return (
          <Message mainColor={light} secoundColor={color}>
            Nenhuma região localizada. Por favor, tente novamente.
          </Message>
        );
    }
  };

  render() {
    const { theme, weather } = this.props;
    const { light, color, dark } = getColor(theme);
    const { location } = weather;
    return (
      <Box>
        <SearchInput onSubmit={this.handleSubmit} location={location} />
        { this.renderMainWeather(light, color) }
        <SecondaryWeather mainColor={color} secoundColor={dark} />
        <SecondaryWeather mainColor={dark} />
      </Box>
    );
  }
}

const mapStateToProps = ({ ui, weather }) => ({
  uiState: ui,
  weather,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getWeatherByValueAction: getWeatherByValue,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(withTheme(WeatherBox));
