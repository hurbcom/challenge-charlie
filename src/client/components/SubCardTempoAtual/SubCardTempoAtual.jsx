import React from "react";
import { connect } from "react-redux";

import "./SubCardTempoAtual.scss";

const SubCardTempoAtual = props => (
    <div className={`previsao-atual ${props.estiloTemperaturaHoje}`}>
        <span className="icone-tempo">{props.iconeTempoHojeView}</span>
        <div className="dados-tempo">
            <h2 className="dia dados__texto">Hoje</h2>
            <a onClick={props.onClick} className="temperatura-link" href="">
                <h3 className="temperatura dados__texto">
                    {props.temperaturaView}
                </h3>
            </a>
            <h2 className="condicao-tempo dados__texto">
                {props.condicaoTempoView}
            </h2>
            <h4 className="vento dados__texto">{props.ventoView}</h4>
            <h4 className="humidade dados__texto">{props.humidadeView}</h4>
            <h4 className="pressao dados__texto">{props.pressaoView}</h4>
        </div>
    </div>
);

const mapStateToProps = state => {
    return {
        condicaoTempoView: state.dados.condicaoTempoView,
        iconeTempoHojeView: state.dados.iconeTempoHojeView,
        temperaturaView: state.dados.temperaturaView,
        ventoView: state.dados.ventoView,
        humidadeView: state.dados.humidadeView,
        pressaoView: state.dados.pressaoView,
        estiloTemperaturaHoje: state.dados.estiloTemperaturaHoje
    };
};

export default connect(mapStateToProps)(SubCardTempoAtual);
