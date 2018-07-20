import ConsomeRESTApi from "../utils/ConsomeRESTApi";

import TempoHojeController from "./TempoHojeController";
import LocalidadeController from "./LocalidadeController";
import TempoAmanhaController from "./TempoAmanhaController";
import TempoDepoisAmanhaController from "./TempoDepoisAmanhaController";

export default class TemporarioController {
    constructor() {
        this.url = "http://localhost:8080/yahoo";
        this.consomeRESTApi = new ConsomeRESTApi();

        this.tempoHojeController = new TempoHojeController();
        this.localidadeController = new LocalidadeController();
        this.tempoAmanhaController = new TempoAmanhaController();
        this.tempoDepoisAmanhaController = new TempoDepoisAmanhaController();

        this.latitude = "";
        this.longitude = "";

        this.bussulaBotao = document.querySelector(".bussula-link");
        this.bussulaBotao.addEventListener("click", event => {
            event.preventDefault();
            this.obtemLocalizacao();
        });

        this.viewTemperaturaHoje = document.querySelector(".temperatura");
        this.viewTemperaturaHoje.addEventListener("click", event => {
            event.preventDefault();
            this.tempoHojeController.alterarUnidadeDeGrandezaTemperatura();
            this.tempoAmanhaController.alterarUnidadeDeGrandezaTemperatura();
            this.tempoDepoisAmanhaController.alterarUnidadeDeGrandezaTemperatura();
        });

        this.inputLocalidade = document.querySelector(".localidade");
        this.formBuscaLocalidade = document.querySelector(".busca-localidade");
        this.formBuscaLocalidade.addEventListener("submit", event => {
            event.preventDefault();
            this.tempoHojeController.nenhumaLocalidadeEscolhida();
            this.tempoAmanhaController.nenhumaLocalidadeEscolhida();
            this.tempoDepoisAmanhaController.nenhumaLocalidadeEscolhida();
            let parametros = {};
            parametros.localidade = this.inputLocalidade.value;
            parametros.url = this.url;
            this.obtemPrevisaoDoTempo(parametros);
        });
    }

    inicio() {
        window.onload = () => this.obtemLocalizacao();
    }

    _obteveLocalizacao() {
        return (
            this.latitude !== "" &&
            this.longitude !== "" &&
            this.latitude !== undefined &&
            this.longitude !== undefined
        );
    }

    obtemPrevisaoDoTempo(parametros) {
        this.consomeRESTApi.obtemApi(parametros).then(dados => {
            this.obtemDadosMeteorologicos(dados);
        });
    }

    obtemDadosMeteorologicos(objeto) {
        let dadosTempoHoje = [
            objeto.query.results.channel.item.condition.temp,
            objeto.query.results.channel.units.temperature,
            objeto.query.results.channel.item.condition.code,
            objeto.query.results.channel.wind.direction,
            objeto.query.results.channel.wind.speed,
            objeto.query.results.channel.units.speed,
            objeto.query.results.channel.atmosphere.humidity,
            objeto.query.results.channel.atmosphere.pressure
        ];

        this.tempoHojeController.dadosRecebidos(dadosTempoHoje);

        let dadosLocalidade = [
            objeto.query.results.channel.location.city,
            objeto.query.results.channel.location.region
        ];

        this.localidadeController.dadosRecebidos(dadosLocalidade);

        let dadosTempoAmanha = [
            objeto.query.results.channel.item.forecast[1].high,
            objeto.query.results.channel.units.temperature,
            objeto.query.results.channel.item.forecast[1].code
        ];

        this.tempoAmanhaController.dadosRecebidos(dadosTempoAmanha);

        let dadosTempoDepoisAmanha = [
            objeto.query.results.channel.item.forecast[2].high,
            objeto.query.results.channel.units.temperature,
            objeto.query.results.channel.item.forecast[2].code
        ];

        this.tempoDepoisAmanhaController.dadosRecebidos(dadosTempoDepoisAmanha);
    }

    obtemLocalizacao() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                this.obtevePosicao.bind(this),
                this.naoObtevePosicao.bind(this)
            );
        } else {
            console.log("Geolocalização não suportada pelo navegador");
        }
    }

    obtevePosicao(posicao) {
        this.latitude = posicao.coords.latitude;
        this.longitude = posicao.coords.longitude;
        let parametros = {};
        parametros.latitude = this.latitude;
        parametros.longitude = this.longitude;
        parametros.url = this.url;
        this.obtemPrevisaoDoTempo(parametros);
    }

    naoObtevePosicao(erro) {
        console.log("Erro: ", erro.code, erro.message);
        this.localidadeController.nenhumaLocalidadeEscolhida();
        this.tempoHojeController.nenhumaLocalidadeEscolhida();
        this.tempoAmanhaController.nenhumaLocalidadeEscolhida();
        this.tempoDepoisAmanhaController.nenhumaLocalidadeEscolhida();
    }
}