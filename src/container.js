import React from 'react';

import { connect } from 'react-redux';

function setBackground() {
    return {
        type: 'SET_BACKGROUND'
    }
}

const Container = ({ modules, dispatch }) => {
    <section className="main-content" style={{ backgroundImage: `url(${modules.background})` }}>
        <div className={`container ${modules.bgcolor}`}>
            <div className="localizacao">
                <h1 className="localizacao-titulo" data-icon="(">{modules.localizacao}</h1>
                <button onClick={() => dispatch(setBackground())}>Teste</button>
            </div>
            <div className="temperatura-caixa">
                <div className="icone" data-icon={modules.icone}></div>
                <div className="grau-section">
                    <p className="dia">HOJE</p>
                    {/* <h2 className="grau" onClick={this.changeDegree}>{modules.grau}</h2> */}
                    <span className="modo">{modules.modo}</span>
                    <div className="descricao">
                        <p>Vento: NO {modules.vento}km/h</p>
                        <p>Humidade: {modules.humidade}%</p>
                        <p>Pressão: {modules.pressao}hPA</p>
                    </div>
                </div>
            </div>
            <div className="amanha">
                <p className="dia">AMANHÃ</p>
                {/* <h2 className="grau" onClick={this.changeDegree}>Min: {modules.grau2}<span className="modo">{modules.modo}</span></h2> */}
                {/* <h2 className="grau" onClick={this.changeDegree}>Max: {modules.grau2max}<span className="modo">{modules.modo}</span></h2> */}
            </div>
            <div className="dia-depois-de-amanha">
                <p className="dia">DEPOIS DE AMANHÃ</p>
                {/* <h2 className="grau" onClick={this.changeDegree}>Min: {modules.grau3}<span className="modo">{modules.modo}</span></h2> */}
                {/* <h2 className="grau" onClick={this.changeDegree}>Max: {modules.grau3max}<span className="modo">{modules.modo}</span></h2> */}
            </div>
        </div>
    </section>
}

export default connect(state => ({ modules: state }))(Container);