import React, { Component } from "react";
import { connect } from "react-redux";

import BarraLocalidade from "../BarraLocalidade/BarraLocalidade";
import SubCardTempoAtual from "../SubCardTempoAtual/SubCardTempoAtual";
import ContainerProximasPrevisoes from "../ContainerProximasPrevisoes/ContainerProximasPrevisoes";
import CondicaoTempoController from "../../controllers/CondicaoTempo.controller";
import "./ContainerSubCards.scss";

class ContainerSubCards extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps) {
        // Efetua a primeira consulta a api do tempo ao carregar a pagina
        // se o usuario permitir a geolocalizacao.
        // Busca também ao clicar na bussula da pagina web
        if (
            (this.props.longitude !== "" &&
                prevProps.longitude === "" &&
                this.props.cidade === "") ||
            (this.props.cidade === prevProps.cidade &&
                this.props.longitude !== prevProps.longitude)
        ) {
            CondicaoTempoController.buscaPorGeoLocalidade(this.props);
        }
        // Altera a temperatura para celsius, apos consultar a API
        // do tempo. Utiliza a comparacao da alteracao da cidade
        // para garantir que os dados ja estao disponiveis
        // para serem renderizados na pagina da web
        if (
            this.props.cidade !== prevProps.cidade &&
            this.props.cidade !== ""
        ) {
            // Troca as temperaturas de fahrenheit para celsius
            CondicaoTempoController.trocaUnidadeTemperatura(this.props);
            // Injeta a cidade e regiao no value do input de texto do formulario
            CondicaoTempoController.injetaLocalidade(this.props);
            // Faz com que os dados da api sejam renderizados na tela
            CondicaoTempoController.preparaView(this.props);
        }

        // Utilizada para renderizar a temperatura atual na pagina da web
        // e para estilizar a cor de fundo dos cards do tempo de acordo
        // com a temperatura de cada card em celsius
        if (
            this.props.unidadeTemperatura !== prevProps.unidadeTemperatura &&
            this.props.temperaturaHoje !== ""
        ) {
            CondicaoTempoController.preparaTemperatura(this.props);
            if (this.props.unidadeTemperatura === "C") {
                CondicaoTempoController.aplicaEstiloDeAcordoTemperatura(
                    this.props
                );
            }
        }
    }

    render() {
        return (
            <div className="container-previsoes">
                <BarraLocalidade
                    onClick={this.buscaGeoLocalidade}
                    value={this.props.localidade}
                    onChange={this.localidadeAlterada}
                    onSubmit={this.buscaCidade}
                    bussola="("
                />
                <SubCardTempoAtual onClick={this.trocaUnidadeTemperatura} />
                <ContainerProximasPrevisoes />
            </div>
        );
    }

    // Chamada ao clicar na temperatura atual, alterando a grandeza
    // de temperatura de celsius para fahrenheit e vice-versa
    trocaUnidadeTemperatura = evento => {
        evento.preventDefault();
        CondicaoTempoController.trocaUnidadeTemperatura(this.props);
    };

    // Altera o estado do componente input controlado no estado da aplicacao
    localidadeAlterada = evento => {
        evento.preventDefault();
        CondicaoTempoController.localidadeAlterada(this.props, evento);
    };

    // Efetua a busca na api do tempo pela localidade informada no input
    // de texto do formulario
    buscaCidade = evento => {
        evento.preventDefault();
        CondicaoTempoController.buscaCidade(this.props);
    };

    // Solicita a geolocalizacao do navegador.
    // Com o consentimento do usuario, Efetua a busca na api do tempo
    // utilizando a geolocalizacao obtida.
    // Esta busca é feita no ciclo de vida componentDidUpdate
    // ao comparar o estado atual e estado anterior da
    // propriedade longitude
    buscaGeoLocalidade = evento => {
        evento.preventDefault();
        CondicaoTempoController.obtemLocalizacao(this.props);
    };
}

function mapStateToProps(state) {
    return {
        cidade: state.dados.cidade,
        regiao: state.dados.regiao,
        localidade: state.dados.localidade,
        longitude: state.dados.longitude,
        latitude: state.dados.latitude,
        temperaturaHoje: state.dados.temperaturaHoje,
        unidadeTemperatura: state.dados.unidadeTemperatura,
        temperaturaAmanha: state.dados.temperaturaAmanha,
        temperaturaDepoisAmanha: state.dados.temperaturaDepoisAmanha,
        condicaoTempoHoje: state.dados.condicaoTempoHoje,
        condicaoTempoAmanha: state.dados.condicaoTempoAmanha,
        condicaoTempoDepoisAmanha: state.dados.condicaoTempoDepoisAmanha,
        ventoVelocidade: state.dados.ventoVelocidade,
        ventoDirecao: state.dados.ventoDirecao,
        ventoUnidade: state.dados.ventoUnidade,
        humidade: state.dados.humidade,
        pressao: state.dados.pressao,
        estilosTemperaturaHoje: state.dados.estilosTemperaturaHoje,
        estilosTemperaturaAmanha: state.dados.estilosTemperaturaAmanha,
        estilosTemperaturaDepoisAmanha:
            state.dados.estilosTemperaturaDepoisAmanha
    };
}

export default connect(mapStateToProps)(ContainerSubCards);
