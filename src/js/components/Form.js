import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 100%;
`;
const Input = styled.input`
  width: 100%;
  height: 161px;
  border: none;
  color: #7e7a79;
  padding: 0 80px 0 150px;
  font-size: 50px;
  font-weight: 700;
  outline: none;
`;

class Form extends Component {

  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <StyledForm>
        <Input
          type="search"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </StyledForm>
    );
  }
}

export default Form;