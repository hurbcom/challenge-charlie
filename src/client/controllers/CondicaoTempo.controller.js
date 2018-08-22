import ConsomeRESTApi from "../utils/ConsomeRESTApi";
import ConverteUnidadesGrandeza from "../utils/ConverteUnidadeGrandeza";
import PontosCardeaisComSubdivisoes from "../utils/PontosCardeaisComSubdivisoes";
import DecodificaCondicaoTempo from "../utils/DecodificaCondicaoTempo";

import * as CondicaoTempoActions from "../actions/CondicaoTempo.actions";

class CondicaoTempoController {
    // Pega os dados obtidos da API do tempo
    // e os prepara para serem renderizados na view
    static preparaView(props) {
        props.dispatch(
            CondicaoTempoActions.preparaIconeTempo(
                this.preparaIconeTempo(
                    props.condicaoTempoHoje,
                    "iconeTempoHojeView"
                )
            )
        );
        props.dispatch(
            CondicaoTempoActions.preparaIconeTempo(
                this.preparaIconeTempo(
                    props.condicaoTempoAmanha,
                    "iconeTempoAmanhaView"
                )
            )
        );
        props.dispatch(
            CondicaoTempoActions.preparaIconeTempo(
                this.preparaIconeTempo(
                    props.condicaoTempoDepoisAmanha,
                    "iconeTempoDepoisAmanhaView"
                )
            )
        );
        props.dispatch(
            CondicaoTempoActions.preparaCondicaoTempo(
                this.preparaCondicaoTempo(
                    props.condicaoTempoHoje,
                    "condicaoTempoView"
                )
            )
        );
        props.dispatch(
            CondicaoTempoActions.preparaTemperatura(
                props.temperaturaHoje,
                props.unidadeTemperatura
            )
        );
        props.dispatch(
            CondicaoTempoActions.preparaVento(
                this.preparaVento(
                    props.ventoDirecao,
                    props.ventoVelocidade,
                    props.ventoUnidade
                )
            )
        );
        props.dispatch(
            CondicaoTempoActions.preparaHumidade(
                this.preparaHumidade(props.humidade)
            )
        );
        props.dispatch(
            CondicaoTempoActions.preparaPressao(
                this.preparaPressao(props.pressao)
            )
        );
    }

    // Troca temperatura ao clicar na temperatura do dia hoje
    static trocaUnidadeTemperatura(props) {
        let dadosTemperatura = {
            unidadeTemperatura: props.unidadeTemperatura,
            temperaturaHoje: props.temperaturaHoje,
            temperaturaAmanha: props.temperaturaAmanha,
            temperaturaDepoisAmanha: props.temperaturaDepoisAmanha
        };
        const dados = this._converteGrandezaTemperatura(dadosTemperatura);
        props.dispatch(CondicaoTempoActions.converteTemperatura(dados));
    }

    // Utilizado para buscar dados do tempo pela localidade
    static buscaCidade(props) {
        props.dispatch(
            CondicaoTempoActions.buscaPorCidade(
                this.buscaPorCidade(props.localidade)
            )
        );
    }

    // Altera o estado do componente input controlado no estado da aplicacao
    static localidadeAlterada = (props, evento) => {
        props.dispatch(
            CondicaoTempoActions.localidadeAlterada(evento.target.value)
        );
    };

    // Utilizado para buscar dados do tempo pela Geolocalidade
    static buscaPorGeoLocalidade = props => {
        let parametros = {};
        parametros.latitude = props.latitude;
        parametros.longitude = props.longitude;
        parametros.url = "http://localhost:8080/yahoo";
        const dados = ConsomeRESTApi.obtemApi(parametros);
        props.dispatch(CondicaoTempoActions.buscaPorLocalidade(dados));
    };

    // Utilizada para renderizar a temperatura do card hoje
    static preparaTemperatura = props => {
        props.dispatch(
            CondicaoTempoActions.preparaTemperatura(
                props.temperaturaHoje,
                props.unidadeTemperatura
            )
        );
    };

    // Injeta a cidade e regiao no value do input de texto do formulario
    static injetaLocalidade = props => {
        let localidade = props.cidade + ", " + props.regiao;
        props.dispatch(CondicaoTempoActions.injetaLocalidade(localidade));
    };

    // Utilizada para estilizar a cor de fundo dos cards do tempo de acordo
    // com a temperatura de cada card em celsius
    static aplicaEstiloDeAcordoTemperatura(props) {
        props.dispatch(
            CondicaoTempoActions.preparaEstiloDeAcordoTemperatura(
                this._aplicaEstiloDeAcordoTemperatura(
                    props.temperaturaHoje,
                    props.estilosTemperaturaHoje,
                    "estiloTemperaturaHoje"
                )
            )
        );

        props.dispatch(
            CondicaoTempoActions.preparaEstiloDeAcordoTemperatura(
                this._aplicaEstiloDeAcordoTemperatura(
                    props.temperaturaAmanha,
                    props.estilosTemperaturaAmanha,
                    "estiloTemperaturaAmanha"
                )
            )
        );

        props.dispatch(
            CondicaoTempoActions.preparaEstiloDeAcordoTemperatura(
                this._aplicaEstiloDeAcordoTemperatura(
                    props.temperaturaDepoisAmanha,
                    props.estilosTemperaturaDepoisAmanha,
                    "estiloTemperaturaDepoisAmanha"
                )
            )
        );
    }

    // Utilizada para estilizar a cor de fundo dos cards do tempo de acordo
    // com a temperatura de cada card em celsius
    static _aplicaEstiloDeAcordoTemperatura(temperatura, estilos, chaveEstilo) {
        const objetoEstilo = {};
        objetoEstilo[chaveEstilo] = this._maiorQueTrintaCinco(
            temperatura,
            estilos
        );
        return objetoEstilo;
    }

    // Funcao utilizada como auxiliar de decisao para estilizar
    // a cor de fundo dos cards do tempo
    static _maiorQueTrintaCinco(temperatura, estilos) {
        return temperatura > 35
            ? estilos[0]
            : this._menorQueQuinze(temperatura, estilos);
    }

    // Funcao utilizada como auxiliar de decisao para estilizar
    // a cor de fundo dos cards do tempo
    static _menorQueQuinze(temperatura, estilos) {
        return temperatura < 15 ? estilos[1] : estilos[2];
    }

    // Obtem a imagem de destaque do Bing
    static obtemImagemDoBing = props => {
        const dados = ConsomeRESTApi.obtemApi({
            url: "http://localhost:8080/bing"
        });
        props.dispatch(CondicaoTempoActions.obtemImagemDoBing(dados));
    };

    // ContainerImagemFundoActions
    // Solicita a geolocalizacao para o navegador
    static obtemLocalizacao = props => {
        const geolocation = navigator.geolocation;
        geolocation.getCurrentPosition(position => {
            props.dispatch(
                CondicaoTempoActions.obtemLocalizacao(position.coords)
            );
        });
    };

    // ContainerSubCardsActions
    // Utilizado para buscar dados do tempo pela Geolocalidade
    static buscaPorLocalidade = props => {
        let parametros = {};
        parametros.latitude = props.latitude;
        parametros.longitude = props.longitude;
        parametros.url = "http://localhost:8080/yahoo";
        const dados = ConsomeRESTApi.obtemApi(parametros);
        props.dispatch(CondicaoTempoActions.buscaPorLocalidade(dados));
    };

    // ContainerSubCardsActions
    // Utilizado para buscar dados do tempo pela localidade
    static buscaPorCidade(localidade) {
        let parametros = {};
        parametros.localidade = localidade;
        parametros.url = "http://localhost:8080/yahoo";
        const dados = ConsomeRESTApi.obtemApi(parametros);
        return dados;
    }

    // CondicaoTempoActions
    // Utilizada para obter o caractere do icone de tempo de acordo com os
    // dados do tempo
    static preparaIconeTempo = (condicaoTempo, nomeChaveIconeTempoView) => {
        let arrayCondicaoTempo = DecodificaCondicaoTempo.decodificaCondicaoTempo(
            condicaoTempo
        );
        /** @type {Object.<string, string>} */
        let dados = {};
        dados[nomeChaveIconeTempoView] = arrayCondicaoTempo[1];
        return dados;
    };

    // CondicaoTempoActions
    // Utilizada para transformar em texto a condicao do tempo
    // de acordo com os dados do tempo
    static preparaCondicaoTempo = (
        condicaoTempo,
        nomeChaveCondicaoTempoView
    ) => {
        let arrayCondicaoTempo = DecodificaCondicaoTempo.decodificaCondicaoTempo(
            condicaoTempo
        );

        let dados = {};
        dados[nomeChaveCondicaoTempoView] = arrayCondicaoTempo[0];
        return dados;
    };

    // CondicaoTempoActions
    // Utilizada para renderizar os dados de vento
    // de acordo com os dados do tempo
    static preparaVento = (ventoDirecao, ventoVelocidade, ventoUnidade) => {
        let vento = "Vento: ";
        vento += PontosCardeaisComSubdivisoes.transformaEmCardeias(
            parseInt(ventoDirecao)
        );
        vento += " ";
        vento += ConverteUnidadesGrandeza.converteMilhaParaKilometros(
            ventoVelocidade
        );
        vento += " ";
        vento += ventoUnidade;
        return vento;
    };

    // CondicaoTempoActions
    // Utilizada para renderizar os dados de humidade
    // de acordo com os dados do tempo
    static preparaHumidade = humidade => {
        let humidadeView = "Humidade: ";
        humidadeView += humidade;
        humidadeView += " %";
        return humidadeView;
    };

    // CondicaoTempoActions
    // Utilizada para renderizar os dados de pressao
    // de acordo com os dados do tempo
    static preparaPressao = pressao => {
        let obtemUnidadeGrandezaPressao = ConverteUnidadesGrandeza.converteMiliBarParaPascal(
            pressao
        );
        let pressaoView = "Pressão: ";
        pressaoView += obtemUnidadeGrandezaPressao[0];
        pressaoView += " ";
        pressaoView += obtemUnidadeGrandezaPressao[1];
        return pressaoView;
    };

    // ContainerSubCardsActions
    // Utilizado para converter a temperatura de
    // CelsiusParaFahrenheit e vice-versa
    static _converteGrandezaTemperatura(dadosTemperatura) {
        let dadosTemperaturaConvertidos = {};
        if (dadosTemperatura.unidadeTemperatura === "C") {
            dadosTemperaturaConvertidos.temperaturaHoje = ConverteUnidadesGrandeza.converteCelsiusParaFahrenheit(
                dadosTemperatura.temperaturaHoje
            ).toFixed(0);

            dadosTemperaturaConvertidos.temperaturaAmanha = ConverteUnidadesGrandeza.converteCelsiusParaFahrenheit(
                dadosTemperatura.temperaturaAmanha
            ).toFixed(0);

            dadosTemperaturaConvertidos.temperaturaDepoisAmanha = ConverteUnidadesGrandeza.converteCelsiusParaFahrenheit(
                dadosTemperatura.temperaturaDepoisAmanha
            ).toFixed(0);

            dadosTemperaturaConvertidos.unidadeTemperatura = "F";
        } else {
            dadosTemperaturaConvertidos.temperaturaHoje = ConverteUnidadesGrandeza.converteFahrenheitParaCelsius(
                dadosTemperatura.temperaturaHoje
            ).toFixed(0);

            dadosTemperaturaConvertidos.temperaturaAmanha = ConverteUnidadesGrandeza.converteFahrenheitParaCelsius(
                dadosTemperatura.temperaturaAmanha
            ).toFixed(0);

            dadosTemperaturaConvertidos.temperaturaDepoisAmanha = ConverteUnidadesGrandeza.converteFahrenheitParaCelsius(
                dadosTemperatura.temperaturaDepoisAmanha
            ).toFixed(0);

            dadosTemperaturaConvertidos.unidadeTemperatura = "C";
        }
        return dadosTemperaturaConvertidos;
    }
}

export default CondicaoTempoController;
