import React, { Component } from 'react';
import { func, instanceOf } from 'prop-types';
import { Icon, Input } from 'components/atoms';
import { Form, Wrapper } from './style';


class SearchInput extends Component {
  static propTypes = {
    onSubmit: func.isRequired,
    location: instanceOf(Object),
  };

  static defaultProps = {
    location: {},
  };

  state = {
    valueInput: '',
  };

  componentWillReceiveProps({ location }) {
    this.setState({ valueInput: location.city });
  }

  handleChangeInput = ({ target }) => {
    this.setState({
      valueInput: target.value,
    });
  };

  handleSubmit = (event) => {
    const { onSubmit } = this.props;
    const { valueInput } = this.state;
    event.preventDefault();
    onSubmit(valueInput);
  };

  render() {
    const { valueInput } = this.state;
    return (
      <Wrapper>
        <Form onSubmit={this.handleSubmit}>
          <Icon code="(" color="#000" />
          <Input
            value={valueInput}
            onChange={this.handleChangeInput}
          />
        </Form>
      </Wrapper>
    );
  }
}


export default SearchInput;
