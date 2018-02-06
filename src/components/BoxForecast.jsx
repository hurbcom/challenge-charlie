import React, { Component } from 'react';

export default class BoxForecast extends Component {
    render() {
        return (
            <div className="forecast-container">
                <p className="box-forecast">Hoje</p>
                <p
                 className="temperatures"
                 onClick={this.props.onClick}>{ this.props.celsius ? `${this.props.today}ºF ` : `${this.props.today}ºC ` }</p>
                <p className="forecast-title">{this.props.data.condition}</p>
                <p className="wind">{`Vento: ${this.props.data.windCurrent}Km/h`}</p>
                <p className="humidity">{`Humidade: ${this.props.data.humidityCurrent}%`}</p>
                <p className="pressure">{`Pressão: ${this.props.data.pressureCurrent}PA`}</p>
            </div>
        )
    }
}