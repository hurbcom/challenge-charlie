import React from "react";
import { connect } from "react-redux";

import { fetchCurrentPosition } from "../../actions";
import weatherEnum from "../../enums/weatherEnum";
import ReducedWeather from "../ReducedWeather";
import ScaleSelector from "../ScaleSelector";
import * as S from "./styles";

class Weather extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentPosition();
  }

  render() {
    if (this.props.today) {
      return (
        <S.Weather>
          <S.Container className={this.props.today.label}>
            <S.Column>
              <S.Icon>{weatherEnum[this.props.today.label].icon}</S.Icon>
            </S.Column>
            <S.Column>
              <S.Temp>
                <h1>
                  Hoje <br />
                  <ScaleSelector day={this.props.today} />
                </h1>
              </S.Temp>
              <S.Description>
                <h2>{weatherEnum[this.props.today.label].label}</h2>
                <p>Vento: NO {this.props.today.wind.speed}Km/h</p>
                <p>Humidade: {this.props.today.main.humidity}%</p>
                <p>Pressão: {this.props.today.main.pressure}hPA</p>
              </S.Description>
            </S.Column>
          </S.Container>
          <ReducedWeather day={this.props.tomorrow} title="Amanhã" />
          <ReducedWeather day={this.props.after} title="Depois de amanhã" />
        </S.Weather>
      );
    }

    return <div>Loading...</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    today: state.weather.today,
    tomorrow: state.weather.tomorrow,
    after: state.weather.after,
  };
};

export default connect(mapStateToProps, {
  fetchCurrentPosition,
})(Weather);
