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

  state = {
    selectedTemperature: 'C',
  };

  handleChangeTemperature = () => {
    this.setState(({ selectedTemperature }) => ({
      selectedTemperature: selectedTemperature === 'C' ? 'F' : 'C',
    }));
  };

  handleSubmit = (value) => {
    const { getWeatherByValueAction } = this.props;
    getWeatherByValueAction(value);
  };

  renderMainWeather = (light, color) => {
    const { uiState, weather } = this.props;
    const { selectedTemperature } = this.state;
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
            onChangeTemperature={this.handleChangeTemperature}
            secoundColor={color}
            selectedTemperature={selectedTemperature}
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
    const { selectedTemperature } = this.state;
    const { days = [], location, today = {} } = weather;
    const [firstDay, secoundDay] = days;
    const { temperature = {} } = today;
    const currentTemperature = temperature.C;
    const { light, color, dark } = getColor(theme, currentTemperature);
    return (
      <Box>
        <SearchInput onSubmit={this.handleSubmit} location={location} />
        { this.renderMainWeather(light, color) }
        <SecondaryWeather
          day={firstDay}
          mainColor={color}
          onChangeTemperature={this.handleChangeTemperature}
          secoundColor={dark}
          selectedTemperature={selectedTemperature}
        />
        <SecondaryWeather
          day={secoundDay}
          mainColor={dark}
          onChangeTemperature={this.handleChangeTemperature}
          selectedTemperature={selectedTemperature}
        />
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
