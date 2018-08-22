import React from "react";

import "./BarraLocalidade.scss";

const BarraLocalidade = props => (
    <div className="local-previsao">
        <a onClick={props.onClick} className="bussola-link" href="">
            <span className="bussola">{props.bussola}</span>
        </a>
        <form action="" onSubmit={props.onSubmit} className="busca-localidade">
            <input
                type="text"
                className="localidade"
                value={props.value}
                onChange={props.onChange}
            />
        </form>
    </div>
);

export default BarraLocalidade;
