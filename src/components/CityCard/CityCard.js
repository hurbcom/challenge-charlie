import React, { Component } from 'react';
import './CityCard.css';


class CityCard extends Component {
    state = {
        expanded: false,
    }

    // A - No lifecycle hook "DIDMOUNT" a partir das props determina-se se a classe CityCard recebe
    // state 'inicial' expanded TRUE ou FALSE.

    componentDidMount () {
        this.setState({expanded: this.props.ativo})
        console.log(this.props)
    }

    // 1 - função local de UI pra mudar o state do card expandido pra compactado e versa-vice

    changeStateHandler = () => {
        this.setState((prevState) => {
            return {expanded: !prevState.expanded};
        });
    }
    
    // 2 - função para receber as temperaturas como number e retornar outro number, usado classes
    // do SASS

    divClassHandler = (temp) => {
        if (temp < -10) {
            return 'm10'
        } else if (temp > -10 && temp < 0) {
            return '0'
        } else if (temp > 0 && temp < 4) {
            return '4'
        }  else if (temp > 9 && temp < 13) {
            return '9'
        } else if (temp > 13 && temp < 17) {
            return '13'
        } else if (temp > 17 && temp < 20) {
            return '17'
        } else if (temp > 20 && temp < 25) {
            return '20'
        } else if (temp > 25 && temp < 30) {
            return '25'
        } else if (temp > 30 && temp < 35) {
            return '30'
        } else if (temp > 35 && temp < 38) {
            return '35'
        } else if (temp > 38 && temp < 40) {
            return '38'
        } else if (temp > 40) {
            return '40'
        }
    }



    render() {

        // preparação da classe do container: retorna o containerClass com valor que consta no SASS
        let finalTemp = '';
        let activeOrNot = '';
        let finalWindSpeed = '';
        if (this.props.card && this.props.card.metric) {
            finalTemp = `${this.props.card.tempc.toFixed(0)}ºC`
            finalWindSpeed = `${this.props.card.ventodir} ${this.props.card.ventom}`
        } else if ( this.props.card !== null && this.props.card.metric === false ) {
            finalTemp = `${this.props.card.tempf.toFixed(0)}ºF`
            finalWindSpeed = `${this.props.card.ventodir} ${this.props.card.ventoi}`
        }
        if (this.state.expanded) {
            activeOrNot = 'a'
        } else {
            activeOrNot = ''
        }
        const tempToBgColor = this.divClassHandler(this.props.card.tempc)
        const containerClass = `CityCardBox${activeOrNot}${tempToBgColor}`

        // fim do preparo do nome da classe do Container do CityCard
        

        return (
            <div onClick={() => this.changeStateHandler()} className={containerClass}>
                <div className="iconArea">
                <div className="onOffIcon">{this.props.card.icone}</div>
                </div>
                <div  className="contentArea">
                    <div onClick={this.props.alterar} className="contentTitle">
                            <h1>{this.props.card.dia}</h1>
                            <h2>{finalTemp}</h2>
                    </div>
                    <div className="contentDescription">
                            <h1>{this.props.card.desc}</h1>
                            <h2>Vento: {finalWindSpeed}<br/>
                            Umidade: {this.props.card.umidade}<br/>
                            Pressão: {this.props.card.pressao}</h2>
                    </div>
                </div>
            </div>
          );
    }
}

export default CityCard;
