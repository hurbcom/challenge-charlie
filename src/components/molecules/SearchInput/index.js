import React, { Component } from 'react';
import { Input } from 'components/atoms';


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
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={valueInput}
            onChange={this.handleChangeInput}
          />
        </form>
      </div>
    );
  }
}


export default SearchInput;
