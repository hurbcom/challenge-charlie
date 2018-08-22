import React from "react";

import "./SubCardTempoEnesimo.scss";

const SubCardTempoEnesimo = props => (
    <div className={`${props.classeContainer} ${props.corContainer}`}>
        <span className="icone-tempo_pequeno">{props.iconeTempo}</span>
        <div className="dados-tempo">
            <h2 className="dia dados__texto">{props.titulo}</h2>
            <h3 className="temperatura dados__texto txt-algn-cnt">
                {`
                ${
                    props.temperatura
                        ? props.temperatura + "º " + props.unidadeTemperatura
                        : ""
                }
                `}
            </h3>
        </div>
    </div>
);

export default SubCardTempoEnesimo;
