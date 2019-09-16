import React, { Component } from 'react';
import './Layout.css';
import CityCard from '../../components/CityCard/CityCard'
import Header from '../Header/Header';
import { connect } from 'react-redux';



class Layout extends Component {
    state = {
        metric: true,
        hoje: { main: {
            temp: 299,
            humidity: 50,
            pressure: 980
        },
        weather: [{
            description: 'nublado',
        }],
        wind: {
            speed: 2,
            deg: 15,
        }
        },
        amanha: { main: {
            temp: 299,
            humidity: 50,
            pressure: 980
        },
        weather: [{
            description: 'nublado',
        }],
        wind: {
            speed: 2,
            deg: 15,
        }
        },
        depoisDeAmanha: { main: {
            temp: 299,
            humidity: 50,
            pressure: 980
        },
        weather: [{
            description: 'nublado',
        }],
        wind: {
            speed: 2,
            deg: 15,
        }
        },
    }

    // 1 - FUNÇÕES REFINARIA DE PROPS RECEBIDAS DO REDUX / DO OPENWEATHER:

    async componentDidMount () {
        await mapStateToProps()
        await this.avaliaAmanha(this.props.cres.list)
    }
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
        console.log(this.props)
        this.avaliaAmanha(this.props.cres.data.list)
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

    // 2 - Função para escolher a previsão dos cartões amanhã e depois de amanhã optando pelos horários sempre de meio dia.:

    avaliaAmanha = async (list) => {
        const digitoDoDiaDeHoje = list[0].dt_txt.charAt(9);
        console.log(digitoDoDiaDeHoje)
        const arraySemHoje = list.filter(item => item.dt_txt.charAt(9) !== digitoDoDiaDeHoje)
        console.log(arraySemHoje)
        console.log(arraySemHoje[6].dt_txt.charAt(12));
        const arrayDeObjetosDePrevisaoNaHoraMeioDia = arraySemHoje.filter(filtrado => filtrado.dt_txt.charAt(12) === '2')
        console.log(arrayDeObjetosDePrevisaoNaHoraMeioDia)
        const objeto1 = arrayDeObjetosDePrevisaoNaHoraMeioDia[0]
        console.log('amanha:')
        console.log(objeto1)
        const objeto2 = arrayDeObjetosDePrevisaoNaHoraMeioDia[1]
        await this.setState({hoje: this.props.cres.data.list[0], amanha: objeto1, depoisDeAmanha: objeto2})
        await console.log(this.state)
    }

    

    
    render() {
        

        //No momento em que o Redux entrega props esses objetos recebem dados:

            let obj1 = { dia: 'HOJE',
                     tempdado: this.state.metric ? `${this.avaliaCelsius(this.state.hoje.main.temp)}°C` : `${this.avaliaFahrenheit(this.state.hoje.main.temp).toFixed(2)}°F`,
                     tempc: this.avaliaCelsius(this.state.hoje.main.temp),
                     tempf: this.avaliaFahrenheit(this.state.hoje.main.temp),
                     desc: this.state.hoje.weather[0].description, 
                     ventom: `${this.state.hoje.wind.speed.toFixed(2)} km/h`,
                     ventoi: `${this.avaliaMph(this.state.hoje.wind.speed).toFixed(2)} mp/h`, 
                      ventodir: this.avaliaVento(this.state.hoje.wind.deg),
                     umidade: this.state.hoje.main.humidity+"%", 
                     pressao: `${this.state.hoje.main.pressure.toFixed(0)} hPa`,
                     icone: this.avaliaIcone(this.state.hoje.weather[0].description),
                     metric: this.state.metric
                    };
            let obj2 = { dia: 'AMANHÃ',
                    tempdado: this.state.metric ? `${this.avaliaCelsius(this.state.amanha.main.temp)}°C` : `${this.avaliaFahrenheit(this.state.amanha.main.temp).toFixed(2)}°F`,
                    tempc: this.avaliaCelsius(this.state.amanha.main.temp),
                    tempf: this.avaliaFahrenheit(this.state.amanha.main.temp),
                    desc: this.state.amanha.weather[0].description, 
                    ventom: `${this.state.amanha.wind.speed.toFixed(2)} km/h`,
                    ventoi: `${this.avaliaMph(this.state.amanha.wind.speed).toFixed(2)} mp/h`, 
                   ventodir: this.avaliaVento(this.state.amanha.wind.deg),
                    umidade: this.state.amanha.main.humidity+"%", 
                    pressao: `${this.state.amanha.main.pressure.toFixed(0)} hPa`,
                    icone: this.avaliaIcone(this.state.amanha.weather[0].description),
                    metric: this.state.metric

                    };
           let obj3 = { dia: 'DEPOIS DE AMANHÃ',
                    tempdado: this.state.metric ? `${this.avaliaCelsius(this.state.depoisDeAmanha.main.temp)}°C` : `${this.avaliaFahrenheit(this.state.depoisDeAmanha.main.temp).toFixed(2)}°F`,
                    tempc: this.avaliaCelsius(this.state.depoisDeAmanha.main.temp),
                    tempf: this.avaliaFahrenheit(this.state.depoisDeAmanha.main.temp),
                    desc: this.state.depoisDeAmanha.weather[0].description, 
                    ventom: `${this.state.depoisDeAmanha.wind.speed.toFixed(2)} km/h`,
                    ventoi: `${this.avaliaMph(this.state.depoisDeAmanha.wind.speed).toFixed(2)} mp/h`, 
                    ventodir: this.avaliaVento(this.state.depoisDeAmanha.wind.deg),
                    umidade: this.state.depoisDeAmanha.main.humidity+"%", 
                    pressao: `${this.state.depoisDeAmanha.main.pressure.toFixed(0)} hPa`,
                    icone: this.avaliaIcone(this.state.depoisDeAmanha.weather[0].description),
                    metric: this.state.metric
                    };
        
        return (
            <div className="Container">
                <Header />
                <CityCard ativo={true} card={obj1} alterar={() => this.alteraMetric()} />
                <CityCard ativo={false} card={obj2} alterar={() => this.alteraMetric()} />
                <CityCard ativo={false} card={obj3} alterar={() => this.alteraMetric()} />

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

