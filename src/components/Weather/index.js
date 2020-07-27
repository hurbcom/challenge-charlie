import React from "react";
import { connect } from "react-redux";

import weatherEnum from "../../enums/weatherEnum";
import ReducedWeather from "../ReducedWeather";
import ScaleSelector from "../ScaleSelector";
import * as S from "./styles";

class Weather extends React.Component {
  render() {
    const animation = !this.props.error;

    if (!this.props.today) {
      if (this.props.error) {
        alert("Localidade não encontrada!");
      }

      return (
        <S.Weather>
          <S.Loading bg="#b2b5b7" height="50vh" {...animation}></S.Loading>
          <S.Loading bg="#a0a3a5" height="18vh" {...animation}></S.Loading>
          <S.Loading bg="#8c8f91" height="18vh" {...animation}></S.Loading>
        </S.Weather>
      );
    }

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
                <p>Umidade: {this.props.today.main.humidity}%</p>
                <p>Pressão: {this.props.today.main.pressure}hPA</p>
              </S.Description>
            </S.Column>
          </S.Container>
          <ReducedWeather day={this.props.tomorrow} title="Amanhã" />
          <ReducedWeather day={this.props.after} title="Depois de amanhã" />
        </S.Weather>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    today: state.weather.today,
    tomorrow: state.weather.tomorrow,
    after: state.weather.after,
    error: state.weather.error,
  };
};

export default connect(mapStateToProps, {})(Weather);
