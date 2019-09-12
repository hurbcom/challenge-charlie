import React, { Component } from 'react';
import './Layout.css';
import CityCard from '../../components/CityCard/CityCard'
import Header from '../Header/Header';



const cCard1 = {dia: 'HOJE', temp: 32, desc: 'Ensolarado', vento: 'NO 6.4km/h', umidade: '18%', pressao: '922hPA' }
const cCard2 = {dia: 'AMANHÃ', temp: 10, desc: 'Chuvoso', vento: 'NO 6.4km/h', umidade: '18%', pressao: '922hPA' }
const cCard3 = {dia: 'DEPOIS DE AMANHÃ', temp: 42, desc: 'Parcialmente nublado', vento: 'NO 6.4km/h', umidade: '18%', pressao: '922hPA' }

class Layout extends Component {
    state = {
        units: 'metric',
    }
    componentDidMount () {
        console.log(cCard1)
        console.log(cCard2)
        console.log(cCard3)

    }
    render() {
        return (
            <div className="Container">
                <Header />
                <CityCard ativo={true} card={cCard1} />
                <CityCard ativo={false} card={cCard2}/>
                <CityCard ativo={false} card={cCard3}/>
                oie
            </div>
          );
    }
}

export default Layout;
