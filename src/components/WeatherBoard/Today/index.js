import './style.scss'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as unitActions from '../../../actions/unitsActions';

import sunny from '../../../../assets/icons/2.svg';
import windy from '../../../../assets/icons/6.svg';
import partlyCloudy from '../../../../assets/icons/8.svg';
import cloudy from '../../../../assets/icons/14.svg';
import thunderstorm from '../../../../assets/icons/15.svg';
import rain from '../../../../assets/icons/18.svg';
import snow from '../../../../assets/icons/23.svg';
import na from '../../../../assets/icons/45.svg';

class Today extends Component {

    constructor(props){
        super(props);
        this.state = { 
            unit: 'C'
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        if(this.state.unit == 'F'){
            this.props.actions.changeTemperatureUnit('C');
        }
        else{
            this.props.actions.changeTemperatureUnit('F');
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({unit: nextProps.unit})
    }

    render() {

        var board = (<div/>)
        let {low, high, text} = this.props.forecast;
        let units = this.props.units;
        let wind = this.props.wind;
        let atmosphere = this.props.atmosphere;

        if(Object.keys(this.props.units).length !== 0){

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
            <div className="today" onClick={this.handleClick}>
                <div className="today__content">
                    <div className="today__info">
                        <div className="today__title">
                            Today
                        </div>
                        {
                            low + this.state.unit +  
                            " ~ " +
                            high + this.state.unit
                        }
                        <div className="today__text">
                            { text }
                        </div>
                        <div className="today__status">
                            <div>
                                { "Wind: " + wind.speed + units.speed + " " + compass}
                            </div>
                            <div>
                                { "Humidity: " + atmosphere.humidity + "%" }
                            </div>
                            <div>
                                { "Pressure: " + atmosphere.pressure + units.pressure }
                            </div> 
                        </div>
                    </div>
                </div>
                
                
                
            </div>
            );
        }

        return board;
    }
}

const mapStateToProps = (state, ownProps) =>
    ({ unit: state.unit, weather: state.weather  });

const mapDispatchToProps = (dispatch) =>
    ({ actions: bindActionCreators(unitActions, dispatch) });

export default connect(mapStateToProps , mapDispatchToProps)(Today);