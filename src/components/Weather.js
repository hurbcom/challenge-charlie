import React, {Component} from 'react';
import {defineIcons} from "../services/icons";
import $ from "jquery";

export default class Weather extends Component{
    constructor(props){
        super(props)
    }

    changeTemperature(temp, e){
        if($(e.target).attr("data-temp") === "f"){
            var arr = $(e.target).text().split("F");
            let fa = (arr[0] - 32 )  * 5 / 9;
            fa = fa.toFixed(0)
            $(e.target).text(fa + "ºC");
            $(e.target).attr("data-temp", "c") 

        }else{
            let fa = (temp * 9 / 5) + 32;
            fa = fa.toFixed(0)
            $(e.target).text(fa + "F");
            $(e.target).attr("data-temp", "f") 
        }
    
    }

    render(){
        return(
            <div className={`weather ${this.props.className}`}>
                <div className="left">
                <p className="icon" data-icon={defineIcons(this.props.descricao)}></p>
                </div>
                <div className="right">
                    <div>
                        <h2>{this.props.dia}</h2>
                        <p onClick={e => this.changeTemperature(this.props.temperatura, e)} data-temp="c" className="temp">{this.props.temperatura}ºC</p>
                    </div>
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