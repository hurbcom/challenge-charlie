import React from "react";
import { connect } from "react-redux";

import { fetchBackground, fetchCurrentPosition } from "../../actions";
import Weather from "../Weather";
import LocationForm from "../LocationForm";
import { ScaleStore } from "../../contexts/ScaleContext";

import { GlobalStyle } from "../../styles/global";
import { Fonts } from "../../styles/fonts";
import * as S from "./styles";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchBackground();
    this.props.fetchCurrentPosition();
  }

  renderLocation() {
    const location = `${this.props.city}, ${this.props.state}`;

    if (!this.props.city || !this.props.state) {
      return <LocationForm />
    }

    return <LocationForm initialValues={{location: location}} />
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Fonts />
        <S.App backgroundUrl={this.props.backgroundUrl}>
          <ScaleStore>
            {this.renderLocation()}
            <Weather />
          </ScaleStore>
        </S.App>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    backgroundUrl: state.background.url,
    city: state.location.city,
    state: state.location.state,
  };
};

export default connect(mapStateToProps, {
  fetchBackground,
  fetchCurrentPosition,
})(App);
