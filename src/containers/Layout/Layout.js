import React, { Component } from 'react';
import './Layout.css';
import CityCard from '../../components/CityCard/CityCard'
import Header from '../Header/Header';

import { connect } from 'react-redux';



export class Layout extends Component {
    state = {
        metric: true,
    }

    // 1 - FUNÇÕES REFINARIA DE PROPS RECEBIDAS DO REDUX / DO OPENWEATHER:

    avaliaVento = (dadovento) => {
        if (dadovento >= 0 && dadovento < 15 ) {
            return 'N'
        } else if (dadovento > 15 && dadovento < 75) {
            return 'NE'
        } else if (dadovento > 75 && dadovento < 105) {
            return 'E'
        } else if (dadovento > 105 && dadovento < 165) {
            return 'SE'
        } else if (dadovento > 165 && dadovento < 195) {
            return 'S'
        } else if (dadovento > 195 && dadovento < 255) {
            return 'SO'
        } else if (dadovento > 255 && dadovento < 290) {
            return 'O'
        } else if (dadovento > 290 && dadovento < 345) {
            return 'NO'
        } else if (dadovento > 345) {
            return 'N'
        }
    }

    avaliaCelsius = (kelvin) => {
        return kelvin - 273.15
    }

    avaliaFahrenheit = (kelvin) => {
        return (kelvin - 273.15) * 9/5 + 32;
    }
    
    avaliaMph = (kmh) => {
        return kmh * 1.6
    }
    
    alteraMetric = () => {
        this.setState((prevState) => {
            return {metric: !prevState.metric};
        });
    }

    avaliaIcone = (avaliado) => {
        if (avaliado === 'nublado') {
            return 'N'
        } else if ( avaliado === 'chuva') {
            return 'R'
        } else if ( avaliado === 'nuvens dispersas') {
            return 'N'
        } else if ( avaliado === 'algumas nuvens') {
            return 'Y'
        } else if ( avaliado === 'céu limpo') {
            return 'B'
        } else if ( avaliado === 'chuva leve') {
            return 'Q'
        } else if ( avaliado === 'chuva moderada') {
            return 'T'
        }
    }

    
    render() {
        let obj1 = {dia: 'HOJE', tempc: 18, tempf: 60, icone: 'R', desc: 'nublado', ventodir: 'S', ventom: '6.4 km/h', umidade: '18%', pressao: '922hPA', tempdado: "32°C", metric: true, }
        let obj2 = {dia: 'AMANHÃ', tempc: 16, tempf: 80, icone: 'Y', desc: 'chuva', ventodir: 'N', ventom: '6.4 km/h', umidade: '18%', pressao: '922hPA', tempdado: "16°C", metric: true,  }
        let obj3 = {dia: 'DEPOIS DE AMANHÃ', tempc: 18, tempf: 60, icone: 'R', desc: 'nublado', ventodir: 'S', ventom: '6.4 km/h', umidade: '18%', pressao: '922hPA', tempdado: "32°C", metric: true, }

        if (this.props.cres) {
            obj1 = { dia: 'HOJE',
                     tempdado: this.state.metric ? `${this.avaliaCelsius(this.props.cres.objeto0.main.temp)}°C` : `${this.avaliaFahrenheit(this.props.cres.objeto0.main.temp).toFixed(2)}°F`,
                     tempc: this.avaliaCelsius(this.props.cres.objeto0.main.temp),
                     tempf: this.avaliaFahrenheit(this.props.cres.objeto0.main.temp),
                     desc: this.props.cres.objeto0.weather[0].description, 
                     ventom: `${this.props.cres.objeto0.wind.speed.toFixed(2)} km/h`,
                     ventoi: `${this.avaliaMph(this.props.cres.objeto0.wind.speed).toFixed(2)} mp/h`, 
                      ventodir: this.avaliaVento(this.props.cres.objeto0.wind.deg),
                     umidade: this.props.cres.objeto0.main.humidity+"%", 
                     pressao: `${this.props.cres.objeto0.main.pressure.toFixed(0)} hPa`,
                     icone: this.avaliaIcone(this.props.cres.objeto0.weather[0].description),
                     metric: this.state.metric
                    };
            obj2 = { dia: 'AMANHÃ',
                    tempdado: this.state.metric ? `${this.avaliaCelsius(this.props.cres.objeto1.main.temp)}°C` : `${this.avaliaFahrenheit(this.props.cres.objeto1.main.temp).toFixed(2)}°F`,
                    tempc: this.avaliaCelsius(this.props.cres.objeto1.main.temp),
                    tempf: this.avaliaFahrenheit(this.props.cres.objeto1.main.temp),
                    desc: this.props.cres.objeto1.weather[0].description, 
                    ventom: `${this.props.cres.objeto1.wind.speed.toFixed(2)} km/h`,
                    ventoi: `${this.avaliaMph(this.props.cres.objeto1.wind.speed).toFixed(2)} mp/h`, 
                   ventodir: this.avaliaVento(this.props.cres.objeto1.wind.deg),
                    umidade: this.props.cres.objeto1.main.humidity+"%", 
                    pressao: `${this.props.cres.objeto1.main.pressure.toFixed(0)} hPa`,
                    icone: this.avaliaIcone(this.props.cres.objeto1.weather[0].description),
                    metric: this.state.metric

                    };
           obj3 = { dia: 'DEPOIS DE AMANHÃ',
                    tempdado: this.state.metric ? `${this.avaliaCelsius(this.props.cres.objeto2.main.temp)}°C` : `${this.avaliaFahrenheit(this.props.cres.objeto2.main.temp).toFixed(2)}°F`,
                    tempc: this.avaliaCelsius(this.props.cres.objeto2.main.temp),
                    tempf: this.avaliaFahrenheit(this.props.cres.objeto2.main.temp),
                    desc: this.props.cres.objeto2.weather[0].description, 
                    ventom: `${this.props.cres.objeto2.wind.speed.toFixed(2)} km/h`,
                    ventoi: `${this.avaliaMph(this.props.cres.objeto2.wind.speed).toFixed(2)} mp/h`, 
                    ventodir: this.avaliaVento(this.props.cres.objeto2.wind.deg),
                    umidade: this.props.cres.objeto2.main.humidity+"%", 
                    pressao: `${this.props.cres.objeto2.main.pressure.toFixed(0)} hPa`,
                    icone: this.avaliaIcone(this.props.cres.objeto2.weather[0].description),
                    metric: this.state.metric
                    };
        }
        return (
            <div className="Container">
                <Header />
                <CityCard ativo={true} card={obj1} alterar={() => this.alteraMetric()} />
                <CityCard ativo={false} card={obj2} alterar={() => this.alteraMetric()}/>
                <CityCard ativo={false} card={obj3} alterar={() => this.alteraMetric()}/>

                <br/><br/><br/><br/>
            </div>
          );
    }
}

// Recepção de dados do Redux:

const mapStateToProps = state => {
    return {
        cres: state.tim,
        
    }
  };



export default connect(mapStateToProps, null)(Layout);

