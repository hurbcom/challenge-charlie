export default class LocalidadeController {
    constructor() {
        // Dados do componente (Model)
        this.cidade = "";
        this.estado = "";

        // Atributos intermediarios para serem concatenados e injetados na view
        this.viewLocalidade = "";

        // Obtem os Elementos HTML (View)
        this.localidadeView = document.querySelector(".localidade");
    }

    _atualizaDOM() {
        this.localidadeView.value = this.viewLocalidade;
    }

    // Limpa os dados deste componente do browser
    // Utilizado quando o usuário não permite a geolocalizacao
    _limpaViews() {
        this.viewLocalidade = "";

        this._atualizaDOM();
    }

    _preparaView() {
        this.viewLocalidade = this.cidade;
        this.viewLocalidade += ",";
        this.viewLocalidade += this.estado;
    }

    nenhumaLocalidadeEscolhida() {
        this._limpaViews();
    }

    // Metodo main. Este método que faz a ponte entre os dados(model) e a view
    // Chamará todos os outros metodos necessarios para renderizar a view
    // em seu estado inicial
    dadosRecebidos(objetoContendoDadosRecebidosViaApi) {
        this.cidade = objetoContendoDadosRecebidosViaApi[0];
        this.estado = objetoContendoDadosRecebidosViaApi[1];

        // Faz com que os dados sejam exibidos no browser
        this._preparaView();
        this._atualizaDOM();
    }
}
