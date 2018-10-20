import React, { Component } from 'react';
import { func } from 'prop-types';
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
  };

  state = {
    valueInput: '',
  };

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
          <Icon icon="compass" size="3x" />
          <Input
            value={valueInput}
            onChange={this.handleChangeInput}
          />
        </Wrapper>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getWeatherByValueAction: getWeatherByValue,
}, dispatch);

export default connect(null, mapDispatchToProps)(SearchInput);
