// Flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

// Actions
import { getBackground } from '../../actions/backgroundActions';

// Components
import Location from '../Location';
import WeatherToday from '../WeatherToday';
import WeatherOther from '../WeatherOther';

// Helpers
import tempTranslate from '../../helpers/tempTranslate';

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      typeTemp: true,
      iconTemperature: '',
    };
  }
  componentWillReceiveProps(props) {
    const { code } = props.outherWeather[0];
    this.getIconTemp(code);
  }

  componentDidMount() {
    this.props.getBackground();
  }
  setBackgroundColor(temp) {
    const convertedTemp = this.convertFahrenheitCelsius(temp);
    const convertNumber = convertedTemp.substring(0, convertedTemp.length - 1);
    if (convertNumber < 15) {
      return 'temp-light';
    }
    if (convertNumber > 35) {
      return 'temp-hot';
    }
    if (convertNumber >= 15 && convertNumber <= 35) {
      return 'temp-normal';
    }
    if (
      !convertNumber ||
      convertNumber === undefined ||
      convertNumber === null ||
      convertNumber.length === 0
    ) {
      return 'temp-not-found';
    }
  }
  convertFahrenheitCelsius(temp, typeTemp = true) {
    if (typeTemp) {
      const calc = (temp - 32) / 1.8;
      return `${calc.toFixed(1)} C`;
    } else {
      return `${temp} F`;
    }
  }
  convertMphKMh(speed) {
    return Math.round(speed * 1.60934);
  }
  conditionText(code) {
    const tempText = tempTranslate.find((item, index) => index === code);
    return tempText;
  }
  handleClick() {
    this.setState({
      typeTemp: !this.state.typeTemp,
    });
  }
  getIconTemp(code) {
    const codeToNumber = Number(code);
    const conditions = {
      rainy: [3, 4, 6, 11, 12, 45, 35, 37, 38, 39, 40, 47],
      cloudy: [26, 28, 30, 34, 44],
      sunny: [31, 32, 36, 27, 29, 33],
      wind: [24],
    };
    const result = Object.keys(conditions).reduce((item, values) => {
      const typeKeys = conditions[values];
      if (typeKeys.indexOf(codeToNumber) !== -1) {
        return values;
      }
      return item;
    });
    switch (result) {
      case 'rainy':
        return this.setState({ iconTemperature: 'R' });
      case 'cloudy':
        return this.setState({ iconTemperature: 'H' });
      case 'sunny':
        return this.setState({ iconTemperature: 'B' });
      case 'wind':
        return this.setState({ iconTemperature: 'S' });
      case undefined:
        return this.setState({ iconTemperature: 'E' });
      default:
        break;
    }
  }
  render() {
    const { wind, atmosphere, item } = this.props.location;
    const { outherWeather } = this.props;

    return (
      <div
        className="weather-background"
        style={{
          backgroundImage: `url('${this.props.image}')`,
        }}
      >
        <div
          className={`${this.setBackgroundColor(
            item.condition.temp,
          )} weather-container`}
        >
          <Location />
          <WeatherToday
            icon={this.state.iconTemperature}
            temperature={this.convertFahrenheitCelsius(
              item.condition.temp,
              this.state.typeTemp,
            )}
            onClick={() => this.handleClick()}
            condition={this.conditionText(item.condition.code)}
            windSpeed={this.convertMphKMh(wind.speed)}
            humidity={atmosphere.humidity}
            pressure={atmosphere.pressure}
          />
          <WeatherOther
            day="Amanhã"
            onClick={() => this.handleClick()}
            temp={this.convertFahrenheitCelsius(
              outherWeather[1].high,
              this.state.typeTemp,
            )}
          />
          <WeatherOther
            day="Depois de amanhã"
            onClick={() => this.handleClick()}
            temp={this.convertFahrenheitCelsius(
              outherWeather[2].high,
              this.state.typeTemp,
            )}
          />
        </div>
      </div>
    );
  }
}

Weather.propTypes = {
  getBackground: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  wind: PropTypes.string,
  atmosphere: PropTypes.string,
  item: PropTypes.string,
};
Weather.defaultProps = {
  wind: null,
  atmosphere: null,
  item: null,
};
const mapStateToProps = state => ({
  image: state.background.background,
  location: state.location.info,
  outherWeather: state.location.outherWeather,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getBackground }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
