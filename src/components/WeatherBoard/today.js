import React, { Component } from 'react';

class Today extends Component {

  constructor(props){
    super(props);
  }

  render() {
    var board = (<div/>)
    let today = this.props.forecast;
    let units = this.props.units;
    let wind = this.props.wind;
    let atmosphere = this.props.atmosphere;

    if(Object.keys(this.props.units).length !== 0){
      console.log(this.state);

      var compass = "N"
      let windDirection = parseInt(wind.direction);
      if(windDirection > 337.5 && windDirection < 22.5)
        compass = "N"
      else if(windDirection > 22.5 && windDirection < 67.5)
        compass = "NE"
      else if (windDirection > 67.5 && windDirection < 112.5)
        compass = "E"
      else if (windDirection > 112.5 && windDirection < 157.5)
        compass = "SE"  
      else if (windDirection > 157.5 && windDirection < 202.5)
        compass = "S"
      else if (windDirection > 202.5 && windDirection < 247.5)
        compass = "SW"
      else if (windDirection > 247.5 && windDirection < 292.5 )
        compass = "W"
      else if (windDirection > 292.5 && windDirection < 337.5)
        compass = "NW"

      board = (
        <div className="today-result">
            <h3 className="__title">
                Today
            </h3>
            <div>
                {
                today.low + units.temperature +  
                " ~ " +
                today.high + units.temperature
                } 
            </div>
            <div>{ today.text }</div>

            <div>{ "Vento: " + wind.speed + units.speed + " " + compass}</div>
            <div>{ "Humidade: " + atmosphere.humidity + "%" }</div>
            <div>{ "Pressão: " + atmosphere.pressure + units.pressure }</div>
        </div>
      );
    }

    return board;
  }
}

export default Today;