import ConverteUnidadesGrandeza from "../utils/ConverteUnidadeGrandeza";
import DecodificaCondicaoTempo from "../utils/DecodificaCondicaoTempo";
import PontosCardeaisComSubdivisoes from "../utils/PontosCardeaisComSubdivisoes";

export default class TempoAmanhaController {
    constructor() {
        this.converteUnidadesGrandeza = new ConverteUnidadesGrandeza();
        this.decodificaCondicaoTempo = new DecodificaCondicaoTempo();
        this.pontosCardeaisComSubdivisoes = new PontosCardeaisComSubdivisoes();

        this.unidadeTemperatura = "C";

        // Dados do componente (Model)
        this.temperatura = "";
        this.unidadeTemperatura = "";
        this.codigoCondicaoTempo = "";

        // Atributos intermediarios para serem concatenados e injetados na view
        this.iconeTempoView = "";
        this.temperaturaView = "";

        // Obtem os Elementos HTML (View)
        this.viewContainerPrevisao = document.querySelector(".previsao_amanha");
        this.viewIconeTempo = document.querySelector(
            ".previsao_amanha .icone-tempo_pequeno"
        );
        this.viewTemperatura = document.querySelector(
            ".previsao_amanha .temperatura"
        );
    }

    // Garante vai ficar somente uma classe de cor de background
    _removeClasseCss(arrayClasses) {
        arrayClasses.forEach(elemento =>
            this.viewContainerPrevisao.classList.remove(elemento)
        );
    }

    aplicaClasseBackgroundCinza() {
        let estilo = [
            "cinza_secundario",
            "amarelo_secundario",
            "vermelho_secundario",
            "azul_secundario"
        ];

        this._removeClasseCss(estilo);
        this.viewContainerPrevisao.classList.add(estilo[0]);
    }

    aplicaEstilo() {
        let estilo = [
            "cinza_secundario",
            "amarelo_secundario",
            "vermelho_secundario",
            "azul_secundario"
        ];

        let temperaturaConvertida = "";

        if (this.unidadeTemperatura === "F") {
            temperaturaConvertida = this.converteUnidadesGrandeza
                .converteFahrenheitParaCelsius(this.temperatura)
                .toFixed(0);
        } else {
            temperaturaConvertida = parseInt(this.temperatura);
        }

        if (temperaturaConvertida > 35) {
            // Vermelho
            this._removeClasseCss(estilo);
            this.viewContainerPrevisao.classList.add(estilo[2]);
        } else if (temperaturaConvertida < 15) {
            // Azul
            this._removeClasseCss(estilo);
            this.viewContainerPrevisao.classList.add(estilo[3]);
        } else {
            // Amarelo
            this._removeClasseCss(estilo);
            this.viewContainerPrevisao.classList.add(estilo[1]);
        }
    }

    // Faz com que os dados sejam exibidos no browser
    _atualizaDOM() {
        this.viewIconeTempo.textContent = this.iconeTempoView;
        this.viewTemperatura.textContent = this.temperaturaView;
    }

    // Limpa os dados deste componente do browser
    // Utilizado quando o usuário não permite a geolocalizacao
    _limpaViews() {
        this.iconeTempoView = "";
        this.temperaturaView = "";

        this._atualizaDOM();
    }

    // Ao clicar na temperatura de estilo, converter a grandeza de temperatura
    _converteGrandezaTemperatura() {
        if (this.unidadeTemperatura === "C") {
            this.temperatura = this.converteUnidadesGrandeza
                .converteCelsiusParaFahrenheit(this.temperatura)
                .toFixed(0);
            this.unidadeTemperatura = "F";
            this._preparaTemperatura([
                this.temperatura,
                this.unidadeTemperatura
            ]);
            this._atualizaDOM();
        } else {
            this.temperatura = this.converteUnidadesGrandeza
                .converteFahrenheitParaCelsius(this.temperatura)
                .toFixed(0);
            this.unidadeTemperatura = "C";
            this._preparaTemperatura([
                this.temperatura,
                this.unidadeTemperatura
            ]);
            this._atualizaDOM();
        }
    }

    _preparaIconeTempo() {
        let arrayCondicaoTempo = this.decodificaCondicaoTempo.decodificaCondicaoTempo(
            this.codigoCondicaoTempo
        );
        this.condicaoTempoView = arrayCondicaoTempo[0];
        this.iconeTempoView = arrayCondicaoTempo[1];
    }

    _preparaTemperatura(dadosTemperatura) {
        this.temperaturaView = dadosTemperatura[0];
        this.temperaturaView += "º ";
        this.temperaturaView += dadosTemperatura[1];
    }

    _preparaView() {
        // Prepara a renderizacao do icone da condicao do tempo
        this._preparaIconeTempo();
        // Alterar a temperatura para Celsius para fixar o erro nas medidas do Yahoo
        this._converteGrandezaTemperatura();
        this._preparaTemperatura([this.temperatura, this.unidadeTemperatura]);
    }

    alterarUnidadeDeGrandezaTemperatura() {
        if (this.unidadeTemperatura === "C") {
            this._converteGrandezaTemperatura();
            this.unidadeTemperatura = "F";
            this._atualizaDOM();
        } else {
            this._converteGrandezaTemperatura();
            this.unidadeTemperatura = "C";
            this._atualizaDOM();
        }
    }

    nenhumaLocalidadeEscolhida() {
        this.aplicaClasseBackgroundCinza();
        this._limpaViews();
    }

    // Metodo main. Este método que faz a ponte entre os dados(model) e a view
    // Chamará todos os outros metodos necessarios para renderizar a view
    // em seu estado inicial
    dadosRecebidos(objetoContendoDadosRecebidosViaApi) {
        this.temperatura = objetoContendoDadosRecebidosViaApi[0];
        this.unidadeTemperatura = objetoContendoDadosRecebidosViaApi[1];
        this.codigoCondicaoTempo = objetoContendoDadosRecebidosViaApi[2];

        // Faz com que os dados sejam exibidos no browser
        this._preparaView();
        this._atualizaDOM();
        this.aplicaEstilo();
    }
}
