import React, { Component } from 'react';
import { func, string } from 'prop-types';
import { Icon, Input } from 'components/atoms';
import {
  bindActionCreators,
  connect,
  getWeatherByValue,
} from 'store/actions';
import { Wrapper } from './style';


class SearchInput extends Component {
  static propTypes = {
    getWeatherByValueAction: func.isRequired,
    location: string,
  };

  static defaultProps = {
    location: '',
  };

  state = {
    valueInput: '',
  };

  componentWillReceiveProps({ location }) {
    this.setState({ valueInput: location });
  }

  handleChangeInput = ({ target }) => {
    this.setState({
      valueInput: target.value,
    });
  };

  handleSubmit = (event) => {
    const { getWeatherByValueAction } = this.props;
    const { valueInput } = this.state;
    event.preventDefault();
    getWeatherByValueAction(valueInput);
  };

  render() {
    const { valueInput } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Wrapper>
          <Icon icon="compass" size="2x" />
          <Input
            value={valueInput}
            onChange={this.handleChangeInput}
          />
        </Wrapper>
      </form>
    );
  }
}

const mapStateToProps = ({ weather }) => ({ location: weather.location });

const mapDispatchToProps = dispatch => bindActionCreators({
  getWeatherByValueAction: getWeatherByValue,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
