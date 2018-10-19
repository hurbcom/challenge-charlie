import React, { Component } from 'react';
import { Icon, Input } from 'components/atoms';
import { Wrapper } from './style';


class SearchInput extends Component {
  state = {
    valueInput: '',
  };

  handleChangeInput = ({ target }) => {
    this.setState({
      valueInput: target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
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


export default SearchInput;
