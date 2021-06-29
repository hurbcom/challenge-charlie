import React, { useState, useEffect, useCallback } from "react";
import './App.css';

function App() {
    const [textInput, setTextInput] = useState('');
    const [coords, setCoords] = useState({
        latitude: null,
        longitude: null
    });
    const [tomorow, setTomorow] = useState();
    const [afterTomorow, setAfterTomorow] = useState();
    const [backgroundImage, setBackgroundImage] = useState();
    const [today, setToday] = useState({});
    const [isCelsius, setIsCelsius] = useState(true);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);


    function handleChange(e) {
        var text = e.target.value;
        setTextInput(text);
    }
    return (
        <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="container">


                <section className="search">
                    <input data-icon="(" placeholder="Digite uma cidade..." className="search__input" type="text" value={textInput} onChange={handleChange} />
                </section>
                {error ? (<section className={`error background-none`}><h1>{loading ? "Carregando..." : "Pesquise outra cidade!"}</h1></section>) : <>
                    <section className={`today }`}>
                        <div className="today__box">
                            <div className="today__icon">
                                <span>{today.icon}</span>
                            </div>
                            <div className="today__box--data">
                                <div className="temperature">
                                    <span>HOJE</span>
                                    <span className="temperature--action" >{today.temp}{isCelsius ? "ºC" : "ºF"}</span>
                                </div>
                                <div className="climate">
                                    <span className="climate__description">{today.description}</span>
                                    <span>Vento:NO {today.wind}km/h</span>
                                    <span>Humidade: {today.humidity}%</span>
                                    <span>Pressão: {today.pressure}hPA</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={`tomorow`}>
                        <div className="tomorow__text">
                            <span>AMANHÃ</span>
                            <span className="temperature--action" >{tomorow}{isCelsius ? "ºC" : "ºF"}</span>
                        </div>
                    </section>

                    <section className={`after-tomorow`}>
                        <div className="after__text">
                            <span>DEPOIS DE AMANHÃ</span>
                            <span className="temperature--action">{afterTomorow}{isCelsius ? "ºC" : "ºF"}</span>
                        </div>
                    </section>
                </>}


            </div>
        </div>
    );
}

export default App;
