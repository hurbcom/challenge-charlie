import React, { Component } from "react";
import { connect } from "react-redux";
import CondicaoTempoController from "../../controllers/CondicaoTempo.controller";

import ContainerCard from "../ContainerCard/ContainerCard";
import "../common/tipografia.scss";
import "./ContainerImagemFundo.scss";

class ContainerImagemFundo extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Obtem a imagem de destaque do Bing
        CondicaoTempoController.obtemImagemDoBing(this.props);
        // Solicita a geolocalizacao para o navegador
        CondicaoTempoController.obtemLocalizacao(this.props);
    }

    render() {
        return (
            <div
                style={{ backgroundImage: `url(${this.props.imagemFundoUrl})` }}
                className="container"
            >
                <ContainerCard />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        imagemFundoUrl: state.dados.imagemFundoUrl
    };
}

export default connect(mapStateToProps)(ContainerImagemFundo);
