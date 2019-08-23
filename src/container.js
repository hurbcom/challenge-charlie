import React from 'react';
import * as BackgroundService from './services/background.service';
import { connect } from 'react-redux';

function setBackground(background) {
    console.log('teste');
    return {
        type: 'SET_BACKGROUND',
        background
    }
}

const Container = ({ modules, dispatch }) => (
    <aside>
        {
            modules.map(module => (
                <section key={module.id} className="main-content" style={{ backgroundColor: `${module.background}` }}>
                    <div className={`container ${module.bgcolor}`}>
                        <div className="localizacao">
                            <h1 className="localizacao-titulo" data-icon="(">{module.localizacao}</h1>
                            <button onClick={() => dispatch(setBackground('blue'))}>Teste</button>
                        </div>
                        <div className="temperatura-caixa">
                            <div className="icone" data-icon={module.icone}></div>
                            <div className="grau-section">
                                <p className="dia">HOJE</p>
                                {/* <h2 className="grau" onClick={this.changeDegree}>{module.grau}</h2> */}
                                <span className="modo">{module.modo}</span>
                                <div className="descricao">
                                    <p>Vento: NO {module.vento}km/h</p>
                                    <p>Humidade: {module.humidade}%</p>
                                    <p>Pressão: {module.pressao}hPA</p>
                                </div>
                            </div>
                        </div>
                        <div className="amanha">
                            <p className="dia">AMANHÃ</p>
                            {/* <h2 className="grau" onClick={this.changeDegree}>Min: {module.grau2}<span className="modo">{module.modo}</span></h2> */}
                            {/* <h2 className="grau" onClick={this.changeDegree}>Max: {module.grau2max}<span className="modo">{module.modo}</span></h2> */}
                        </div>
                        <div className="dia-depois-de-amanha">
                            <p className="dia">DEPOIS DE AMANHÃ</p>
                            {/* <h2 className="grau" onClick={this.changeDegree}>Min: {module.grau3}<span className="modo">{module.modo}</span></h2> */}
                            {/* <h2 className="grau" onClick={this.changeDegree}>Max: {module.grau3max}<span className="modo">{module.modo}</span></h2> */}
                        </div>
                    </div>
                </section>
            ))
        }
    </aside>
)

export default connect(state => ({ modules: state }))(Container);