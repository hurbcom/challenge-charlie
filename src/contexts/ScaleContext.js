import React from "react";

const Context = React.createContext("celcius");

export class ScaleStore extends React.Component {
  state = { scale: "celcius" };

  onChangeScale = () => {
    const scale = this.state.scale === "celcius" ? "fahenheit" : "celcius";

    this.setState({ scale });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onChangeScale: this.onChangeScale }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
