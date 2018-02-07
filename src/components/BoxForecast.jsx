import React, { Component } from 'react';
import Utils from '../utils/Utils'

export default class BoxForecast extends Component {
    render() {
        return (
            <div className="white forecast-container">
                <p className="white box-forecast">Hoje</p>
                <p
                 className="white temperatures"
                 onClick={this.props.onClick}>{ this.props.celsius ? `${this.props.today}ºF ` : `${this.props.today}ºC ` }</p>
                <p className="white forecast-title">{ Utils.getCondition(this.props.data.condition.toLowerCase()) }</p>
                <p className="white wind">{`Vento: ${this.props.data.windCurrent}Km/h`}</p>
                <p className="white humidity">{`Humidade: ${this.props.data.humidityCurrent}%`}</p>
                <p className="white pressure">{`Pressão: ${this.props.data.pressureCurrent}PA`}</p>
            </div>
        )
    }
}