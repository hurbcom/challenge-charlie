import React, {Component} from 'react';
import {defineIcons} from "../services/icons";

export default class Weather extends Component{
    constructor(props){
        super(props)
    }

    changeTemperature(temp){
        alert(temp)
    }

    render(){
        return(
            <div className={`weather ${this.props.className}`}>
                <div className="left">
                <p className="icon" data-icon={defineIcons(this.props.descricao)}></p>
                </div>
                <div className="right">
                <h2>{this.props.dia}</h2>
                <p onClick={() => this.changeTemperature(this.props.temperatura)} className="temp">{this.props.temperatura}</p>
                <div className="clima">
                    <h4 className="clima-estado">{this.props.descricao}</h4>
                    <p className="infos">Vento: <span>NO {this.props.vento} km/h</span></p>
                    <p className="infos">Humidade: <span>{this.props.humidade}%</span></p>
                    <p className="infos">Pressão: <span>{this.props.pressao}hPA</span></p>
                </div>
                </div>
            </div>
        )
    }
}