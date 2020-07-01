import React, { Component } from "react";
import { FormStyles } from './FormStyles';
import LocationSearchInput from "../LocationSearchInput";

class Form extends Component {

  render() {
    return (
      <FormStyles>        
        <label>
          <div className="icon" data-icon="("></div>
          <LocationSearchInput>
          </LocationSearchInput>
        </label>
      </FormStyles>
    );
  }
}

export default Form;