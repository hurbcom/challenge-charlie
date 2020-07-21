import React from "react";
import ScaleContext from "../contexts/ScaleContext";

class ScaleSelector extends React.Component {
  static contextType = ScaleContext;

  renderTemp() {
    if (this.context.scale === "celcius") {
      return `${this.props.day.celcius}°C`;
    }

    return `${this.props.day.fahrenheit}°F`;
  }

  render() {
    return (
      <span onClick={() => this.context.onChangeScale()}>
        {this.renderTemp()}
      </span>
    );
  }
}

export default ScaleSelector;
