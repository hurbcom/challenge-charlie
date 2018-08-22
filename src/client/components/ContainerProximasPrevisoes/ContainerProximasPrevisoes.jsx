import React from "react";
import { connect } from "react-redux";

import SubCardTempoEnesimo from "../SubCardTempoEnesimo/SubCardTempoEnesimo";
import "./ContainerProximasPrevisoes.scss";

const ContainerProximasPrevisoes = props => (
    <div className="container__proximas-previsoes">
        <SubCardTempoEnesimo
            iconeTempo={props.iconeTempoAmanhaView}
            classeContainer="previsao_amanha"
            corContainer={props.estiloTemperaturaAmanha}
            titulo="Amanhã"
            temperatura={props.temperaturaAmanha}
            unidadeTemperatura={props.unidadeTemperatura}
        />
        <SubCardTempoEnesimo
            iconeTempo={props.iconeTempoDepoisAmanhaView}
            classeContainer="previsao_depois-amanha"
            corContainer={props.estiloTemperaturaDepoisAmanha}
            titulo="Depois de amanhã"
            temperatura={props.temperaturaDepoisAmanha}
            unidadeTemperatura={props.unidadeTemperatura}
        />
    </div>
);

function mapStateToProps(state) {
    return {
        unidadeTemperatura: state.dados.unidadeTemperatura,
        temperaturaAmanha: state.dados.temperaturaAmanha,
        temperaturaDepoisAmanha: state.dados.temperaturaDepoisAmanha,
        iconeTempoAmanhaView: state.dados.iconeTempoAmanhaView,
        iconeTempoDepoisAmanhaView: state.dados.iconeTempoDepoisAmanhaView,
        estiloTemperaturaAmanha: state.dados.estiloTemperaturaAmanha,
        estiloTemperaturaDepoisAmanha: state.dados.estiloTemperaturaDepoisAmanha
    };
}

export default connect(mapStateToProps)(ContainerProximasPrevisoes);
