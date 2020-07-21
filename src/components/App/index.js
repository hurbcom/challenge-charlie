import React from "react";
import { connect } from "react-redux";

import { fetchBackground } from "../../actions";
import Weather from "../Weather";
import { ScaleStore } from "../../contexts/ScaleContext";

import { GlobalStyle } from "../../styles/global";
import { Fonts } from "../../styles/fonts";
import * as S from "./styles";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchBackground();
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Fonts />
        <S.App backgroundUrl={this.props.backgroundUrl}>
          <ScaleStore>
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
  };
};

export default connect(mapStateToProps, {
  fetchBackground,
})(App);
