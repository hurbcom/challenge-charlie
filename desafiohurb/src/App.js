import React, { useState, useEffect, useCallback } from "react";
import './App.css';
import debounce from 'lodash.debounce';
import jsonListIcon from './json/icon-list.json';
import api from './services/api';
import { verifyTemperature, toFahrenheit, toCelsius, loadPosition } from './utils/utils';
import { OpenWeatherService } from './services/openweathermap';
import { OpenCageService } from './services/opencagedata';

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

    const loadWeather = useCallback(
        (city) => {
            OpenWeatherService.getWeather(city).then(response => {
                setError(false);
                setIsCelsius(false);
                changeTemperature();
                setToday({
                    humidity: response.main.humidity,
                    pressure: response.main.pressure,
                    temp: response.main.temp.toFixed(0),
                    wind: response.wind.speed,
                    description: response.weather[0].description,
                    icon: jsonListIcon[response.weather[0].icon]
                });
            }).catch(e => console.log('Faltou a cidade válida!', e));;


            OpenWeatherService.getForecast(city).then(response => {

                const tomorow = response.list[6].main.temp.toFixed(0);
                const afterTomorow = response.list[14].main.temp.toFixed(0);
                setTomorow(tomorow);
                setAfterTomorow(afterTomorow);
            }).catch(e => console.log('Faltou a cidade válida!', e));
            setLoading(false);
        },
        [],

    );

    // LODASH
    const debounceText = useCallback(debounce(loadWeather, 1000), [loadWeather]);


    const baseUrl = "https://www.bing.com/";
    useEffect(() => {
        setLoading(true);
        if (textInput !== '') {
            setError(true);
            setLoading(false);
        }

        // https://cors-anywhere.herokuapp.com/corsdemo
        api.get("https://cors-anywhere.herokuapp.com/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR").then(response => {
            setBackgroundImage(`${baseUrl}${response.data.images[0].url}`);
        });

        loadPosition().then(response => {
            setCoords({
                latitude: response.latitude,
                longitude: response.longitude
            });
        }).catch(error => {
            // setError(true);
        });;


    }, []);

    useEffect(() => {
        if (!coords.latitude || !coords.longitude) {
            return;
        }
        OpenCageService.getCityByLongitude(coords).then(response => {
            setTextInput(response);
        });
    }, [coords]);

    useEffect(() => {
        if (!textInput) {
            setToday({});
            setTomorow("");
            setAfterTomorow("");
            setError(true);
            setLoading(true);
            return;
        } else {
            setError(true);
        }

        debounceText(textInput);

    }, [textInput, debounceText]);

    function changeTemperature() {
        if (isCelsius) {
            setToday({
                ...today,
                temp: toFahrenheit(today.temp).toFixed(0),
            });
            setTomorow(toFahrenheit(tomorow).toFixed(0));
            setAfterTomorow(toFahrenheit(afterTomorow).toFixed(0));
        } else {
            setToday({
                ...today,
                temp: toCelsius(today.temp).toFixed(0),
            });
            setTomorow(toCelsius(tomorow).toFixed(0));
            setAfterTomorow(toCelsius(afterTomorow).toFixed(0));
        }
        setIsCelsius(!isCelsius);
    }

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
                    <section className={`today ${verifyTemperature(today.temp, isCelsius)}`}>
                        <div className="today__box">
                            <div className="today__icon">
                                <span>{today.icon}</span>
                            </div>
                            <div className="today__box--data">
                                <div className="temperature">
                                    <span>HOJE</span>
                                    <span className="temperature--action" onClick={changeTemperature}>{today.temp}{isCelsius ? "ºC" : "ºF"}</span>
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

                    <section className={`tomorow ${verifyTemperature(tomorow, isCelsius)}`}>
                        <div className="tomorow__text">
                            <span>AMANHÃ</span>
                            <span className="temperature--action" onClick={changeTemperature}>{tomorow}{isCelsius ? "ºC" : "ºF"}</span>
                        </div>
                    </section>

                    <section className={`after-tomorow ${verifyTemperature(afterTomorow, isCelsius)}`}>
                        <div className="after__text">
                            <span>DEPOIS DE AMANHÃ</span>
                            <span className="temperature--action" onClick={changeTemperature}>{afterTomorow}{isCelsius ? "ºC" : "ºF"}</span>
                        </div>
                    </section>
                </>}


            </div>
        </div>
    );
}

export default App;
