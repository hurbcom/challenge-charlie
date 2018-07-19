import React, { Component } from 'react'
import Main from '../components/template/Main'
// import axios from 'axios'
import IconHot from '../assets/images/2.svg'

export default class Weather extends Component {

    render() {
        return (
            <Main className={this.props.className} style={this.props.style} onClick={this.props.onClick}>
            {this.props.tipoBox == "biggest" ? (
                <div className="col-md-8 d-flex">
                    <div className="col-md-6 pl-0" tipoBox={this.props.tipoBox}>
                        <img src={IconHot} className="col-md-12 pl-0 icones pr-0" />
                    </div>
                </div>
                ) : (
                <div className="col-md-8 text-left d-flex">
                    <div className="col-md-2 pl-0" tipoBox={this.props.tipoBox}>
                        <img src={IconHot} className="col-md-12 pl-0 icones pr-0" />
                    </div>
                    <p className="m-0 col-md-4">{this.props.day}</p>
                </div>
            )} 
            {this.props.tipoBox == "biggest" ? (

            <div className="col-md-4">
                <h2 className="pt-0 pb-0 m-0">{this.props.day}</h2>
                <h1 className="pt-0 pb-0 m-0"><a>{this.props.temp}o {this.props.type}</a></h1>
                <p className="pt-0 pb-0 mb-0 mt-0">Vento: {this.props.wind} KM/h</p>
                <p className="pt-0 pb-0 mb-0 mt-0">Umidade: {this.props.humidity}</p>
                <p className="pt-0 pb-0 mb-0 mt-0">Pressão: {this.props.pressure}</p>
            </div>
            ) : (
            <div className="col-md-4 text-right">
                <h1 className="pt-0 pb-0 m-0"><a>{this.props.temp}o {this.props.type}</a></h1>
            </div>)}
                
                {/* <p style={style}>{this.state.city}</p> */}
                {/* <p>{this.state.region}</p> */}
                {/* <p>{this.state.country}</p> */}
                {/* <p>{this.props.day}</p> */}
            </Main>
        )
    }

}

