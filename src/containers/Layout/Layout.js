import React, { Component } from 'react';
import './Layout.css';
import CityCard from '../../components/CityCard/CityCard'
import Header from '../Header/Header';

import { connect } from 'react-redux';



class Layout extends Component {
    state = {
        metric: true,
    }

    // 1 - FUNÇÕES REFINARIA DE DADOS:

    avaliaVento = (dadovento) => {
        if (dadovento === 0 && dadovento < 15 ) {
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
    


    avaliaAmanha = (list) => {
        // const refDataHoje = list[0].charAt(9) + 1
        // const refDataHoje = list[0].charAt(9)
        // const meioDiaOnly = list.filter(item => item.charAt(9) = 2)
        // const refDataHoje = list.filter(item => item.charAt(12) = refDataHoje)

        //parte ativa
            // 1 - fazer o filter inverso na lista pra elementos char[9] do mesmo dia do dia[0]
            // 2 - fazer filter de ítem que o char[12]
            // 3 - [0] = amanhã, [1] = depois de amanhã
            // tudo isso tem que ser dentro do render pq geram-se dois objetos a partir disso
            // 4 - lembrar que tem que fazer CELSIUS e fahrenheit dependendo do state
        "2017-02-16 15:00:00"
        
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
        let obj1 = {dia: 'HOJE', temp: 32, desc: 'Ensolarado', vento: 'NO 6.4km/h', umidade: '18%', pressao: '922hPA', tempdado: "32°C" }
        let obj2 = {dia: 'AMANHÃ', temp: 16, desc: 'Chuvoso', vento: 'NO 6.4km/h', umidade: '18%', pressao: '922hPA', tempdado: "16°C" }
        let obj3 = {dia: 'DEPOIS DE AMANHÃ', temp: 42, desc: 'Parcialmente nublado', vento: 'NO 6.4km/h', umidade: '18%', pressao: '922hPA', tempdado: "42°C" };

        if (this.props.cres) {
            obj1 = { dia: 'HOJE',
                     tempdado: this.state.metric ? `${this.avaliaCelsius(this.props.cres.data.list[0].main.temp)}°C` : `${this.avaliaFahrenheit(this.props.cres.data.list[0].main.temp).toFixed(2)}°F`,
                     temp: this.avaliaCelsius(this.props.cres.data.list[0].main.temp),
                     desc: this.props.cres.data.list[0].weather[0].description, 
                     vento: this.avaliaVento(this.props.cres.data.list[0].wind.deg) & this.state.metric ? this.props.cres.data.list[0].wind.speed.toFixed(2)+"km/h" : this.avaliaMph(this.props.cres.data.list[0].wind.speed).toFixed(2)+"mph", 
                     ventodir: this.avaliaVento(this.props.cres.data.list[0].wind.deg),
                     umidade: this.props.cres.data.list[0].main.humidity+"%", 
                     pressao: this.props.cres.data.list[0].main.pressure+"hPA" ,
                     icone: this.avaliaIcone(this.props.cres.data.list[0].weather[0].description)
                    };
            obj2 = { dia: 'AMANHÃ',
                    tempdado: this.state.metric ? `${this.avaliaCelsius(this.props.cres.data.list[8].main.temp)}°C` : `${this.avaliaFahrenheit(this.props.cres.data.list[8].main.temp).toFixed(2)}°F`,
                    temp: this.avaliaCelsius(this.props.cres.data.list[8].main.temp),
                    desc: this.props.cres.data.list[8].weather[0].description, 
                    vento: this.avaliaVento(this.props.cres.data.list[8].wind.deg) + this.state.metric ? this.props.cres.data.list[8].wind.speed.toFixed(2)+"km/h" : this.avaliaMph(this.props.cres.data.list[8].wind.speed).toFixed(2)+"mph", 
                    ventodir: this.avaliaVento(this.props.cres.data.list[8].wind.deg),
                    umidade: this.props.cres.data.list[8].main.humidity+"%", 
                    pressao: this.props.cres.data.list[8].main.pressure+"hPA" ,
                    icone: this.avaliaIcone(this.props.cres.data.list[8].weather[0].description)

                    };
           obj3 = { dia: 'DEPOIS DE AMANHÃ',
                    tempdado: this.state.metric ? `${this.avaliaCelsius(this.props.cres.data.list[16].main.temp)}°C` : `${this.avaliaFahrenheit(this.props.cres.data.list[16].main.temp).toFixed(2)}°F`,
                    temp: this.avaliaCelsius(this.props.cres.data.list[16].main.temp),
                    desc: this.props.cres.data.list[16].weather[0].description, 
                    vento: this.avaliaVento(this.props.cres.data.list[16].wind.deg) + this.state.metric ? this.props.cres.data.list[16].wind.speed.toFixed(2)+"km/h" : this.avaliaMph(this.props.cres.data.list[16].wind.speed).toFixed(2)+"mph", 
                    ventodir: this.avaliaVento(this.props.cres.data.list[16].wind.deg),
                    umidade: this.props.cres.data.list[16].main.humidity+"%", 
                    pressao: this.props.cres.data.list[16].main.pressure+"hPA" ,
                    icone: this.avaliaIcone(this.props.cres.data.list[16].weather[0].description)
                    };
        }
        return (
            <div className="Container">
                <Header />
                <CityCard ativo={true} card={obj1} />
                <CityCard ativo={false} card={obj2}/>
                <CityCard ativo={false} card={obj3}/>

                <br/><br/><br/><br/>
            </div>
          );
    }
}

const mapStateToProps = state => {
    return {
        cres: state.tim,
        
    }
  };



export default connect(mapStateToProps, null)(Layout);

