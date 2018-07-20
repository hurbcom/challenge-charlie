import ConsomeRESTApi from "../utils/ConsomeRESTApi";

export default class ImagemDeFundoController {
    constructor() {
        this.url = "http://localhost:8080/bing";
        this.consomeRESTApi = new ConsomeRESTApi();
        this.containerImagemFundo = document.querySelector(".container");
        this.urlImagemDeFundo = "";
    }

    obtemImagemDeFundo() {
        let parametros = {
            url: this.url
        };
        this.consomeRESTApi.obtemApi(parametros).then(dados => {
            this.urlImagemDeFundo = "https://bing.com.br" + dados.images[0].url;
            this.injetaImagemNoComponent();
        });
    }

    injetaImagemNoComponent() {
        this.containerImagemFundo.setAttribute(
            "style",
            "background-image: url(" + this.urlImagemDeFundo + ")"
        );
    }

    aplicaImagemDeFundo() {
        this.obtemImagemDeFundo();
    }
}
