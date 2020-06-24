import React, { Component } from "react";
import { FormStyles } from './FormStyles';

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
      <FormStyles>        
        <label htmlFor="busca">
          <div className="icon" data-icon="("></div>
          <input
            type="search"
            value={this.state.value}
            onChange={this.handleChange}
            id="busca"
          />
        </label>
      </FormStyles>
    );
  }
}

export default Form;