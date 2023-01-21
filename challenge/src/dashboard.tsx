import React, { useEffect, useState } from "react";
import TextField from "./components/text-field/text-field";
import getForecast from "./resources/weather-api/weather-api";
import ImageBingApi from "./resources/bing-image-api/image-bing-api";
import { WeahterItemModel } from "./resources/weather-api/weather-model";
import "./dashboard.css";
import getOpenCageAPI from "./resources/open-cage-api/open-cage-api";
import Coordinates from "./model/coordinate";
import Previsao from "./model/previsao";
import getIcon from "./utils/search-icon";
import LinearProgress from "@mui/material/LinearProgress";
import SunIcon46 from "./assets/img/46.svg";
import SunIcon47 from "./assets/img/47.svg";

/**
 * Dashboard da aplicação
 */
function App() {
    const initialPrevisao = {
        umidade: 0,
        pressao: 0,
        temperaturaK: 0,
        temperaturaF: 0,
        temperaturaC: 0,
        vento: 0,
        descricao: "",
        icon: getIcon(null),
    };
    const [dsCidade, setDsCidade] = useState<string>();
    const [URLBackground, setURLBackground] = useState<string>();
    const [coordinates, setCoordinates] = useState<Coordinates>();
    const [loading, setLoading] = useState<boolean>(true);
    const [showCelsius, setShowCelsius] = useState<boolean>(true);
    const [previsaoHoje, setPrevisaoHoje] = useState<Previsao>(initialPrevisao);
    const [previsaoAmanha, setPrevisaoAmanha] =
        useState<Previsao>(initialPrevisao);
    const [previsaoDepoisAmanha, setPrevisaoDepoisAmanha] =
        useState<Previsao>(initialPrevisao);

    useEffect(() => {
        getGeolocation();
        ImageBingApi().then((res) => {
            setURLBackground(res);
        });
    }, []);

    useEffect(() => {
        if (coordinates && coordinates.lat && coordinates.lng) {
            getForecast(coordinates.lat.toString(), coordinates.lng.toString())
                .then((res) => {
                    const previsaoHojeAux = res.data.list[0];
                    cadastrarPrevisao(previsaoHojeAux, setPrevisaoHoje);

                    const previsaoAmanhaAux = res.data.list[1];
                    cadastrarPrevisao(previsaoAmanhaAux, setPrevisaoAmanha);

                    const previsaoDepoisAmanhaAux = res.data.list[2];
                    cadastrarPrevisao(
                        previsaoDepoisAmanhaAux,
                        setPrevisaoDepoisAmanha
                    );
                })
                .finally(() => setLoading(false));
        }
    }, [coordinates]);

    /**
     * Cadastra a previsão do tempo na estado correspondete
     * @param previsao
     * @param setPrevisao
     */
    function cadastrarPrevisao(
        previsao: WeahterItemModel,
        setPrevisao: React.Dispatch<React.SetStateAction<Previsao>>
    ) {
        const temperaturas = convertTemperature(previsao.main.temp.toString());
        setPrevisao({
            umidade: previsao.main.humidity,
            pressao: previsao.main.pressure,
            temperaturaK: previsao.main.temp,
            temperaturaF: temperaturas.fahrenheit,
            temperaturaC: temperaturas.celsius,
            vento: previsao.wind.speed,
            descricao: previsao.weather[0].description,
            icon: getIcon(previsao.weather[0].id),
        });
    }

    /**
     * Busca a cor de hoje de amanha de acordo com a temperatura
     * @param temperatura - Temperatura
     * @param opacity - Opacidade da cor
     * @returns
     */
    function getColorTodayAndTomorrow(temperatura: number, opacity: number) {
        if (temperatura && temperatura < 16) {
            return `rgba(64, 117, 237, ${opacity})`;
        } else if (temperatura && temperatura >= 35) {
            return `rgba(250, 43, 43, ${opacity})`;
        } else if (temperatura) {
            return `rgba(250, 204, 5, ${opacity})`;
        }

        return `rgba(75, 55, 55, 0.${opacity})`;
    }

    /**
     * Busca a cor de depois de amanha de acordo com a temperatura
     * @param temperatura - Temperatura
     * @returns
     */
    function getColorDepoisAmanha(temperatura: number) {
        if (temperatura && temperatura < 16) {
            return `rgba(3, 3, 184, 1)`;
        } else if (temperatura && temperatura >= 35) {
            return `rgba(184, 3, 3, 1)`;
        } else if (temperatura) {
            return `rgba(184, 149, 3, 1)`;
        }

        return `rgba(67, 55, 55, 1)`;
    }

    return (
        <div>
            <div
                className="background"
                style={{ backgroundImage: `url("${URLBackground}")` }}
            >
                {loading && <LinearProgress className="linearProgress" />}
                <div className="dashboardCard">
                    <TextField
                        id="region"
                        value={dsCidade}
                        onChange={(e) => changeTextField(e.target.value)}
                        stopTyping={loadGeoLocalization}
                    />

                    <div
                        className="cardClimas today"
                        style={{
                            backgroundColor: getColorTodayAndTomorrow(
                                previsaoHoje.temperaturaC,
                                0.3
                            ),
                        }}
                    >
                        <div className="cardIconTempo">
                            <img
                                src={previsaoHoje.icon}
                                className="iconTempo"
                                alt="sun"
                            />
                        </div>
                        <div className="cardText cardNextDays">
                            <div> HOJE </div>
                            <div
                                onClick={() => setShowCelsius(!showCelsius)}
                                className="temperatura"
                            >
                                {getPrevisaoHojeLabel()}
                                <img
                                    src={showCelsius ? SunIcon46 : SunIcon47}
                                    alt="iconC"
                                    className="iconCelsius"
                                />
                            </div>
                            <div style={{ height: 40 }} />
                            <div style={{ fontSize: 40 }}>
                                {previsaoHoje.descricao}
                            </div>
                            <div style={{ height: 20 }} />
                            <div className="subtitle">
                                Vento: NO {previsaoHoje.vento}km/h
                            </div>
                            <div className="subtitle">
                                Humidade: {previsaoHoje.umidade}%
                            </div>
                            <div className="subtitle">
                                Pressão: {previsaoHoje.pressao}hPA
                            </div>
                        </div>
                    </div>
                    <div
                        className="cardClimas tomorrow"
                        style={{
                            backgroundColor: getColorTodayAndTomorrow(
                                previsaoHoje.temperaturaC,
                                1
                            ),
                        }}
                    >
                        <div className="cardBlank" />
                        {cardNextDays("AMANHÃ", getPrevisaoAmanhaLabel())}
                    </div>
                    <div
                        className="cardClimas depoisAmanha"
                        style={{
                            backgroundColor: getColorDepoisAmanha(
                                previsaoHoje.temperaturaC
                            ),
                        }}
                    >
                        <div className="cardBlank" />
                        {cardNextDays(
                            "DEPOIS DE AMANHÃ",
                            getPrevisaoDepoisAmanhaLabel()
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    /**
     * Label de previsão para amanhã
     */
    function getPrevisaoAmanhaLabel() {
        return previsaoAmanha[showCelsius ? "temperaturaC" : "temperaturaF"];
    }

    /**
     * Label de previsão para depois de amanhã
     */
    function getPrevisaoDepoisAmanhaLabel() {
        return previsaoDepoisAmanha[
            showCelsius ? "temperaturaC" : "temperaturaF"
        ];
    }

    /**
     * Label de previsão para hoje
     */
    function getPrevisaoHojeLabel() {
        return `${previsaoHoje[showCelsius ? "temperaturaC" : "temperaturaF"]}`;
    }

    /**
     * Ação de alterar campo de texto
     * @param value - novo valor do campo
     */
    function changeTextField(value: string) {
        setLoading(true);
        setDsCidade(value);
    }

    /**
     * Componente de próximo dia
     * @param labelData - label do componente
     * @param temperatura - Temperatura
     * @returns
     */
    function cardNextDays(labelData: string, temperatura: number) {
        return (
            <div className="cardNextDays">
                <div> {labelData} </div>
                <div
                    onClick={() => setShowCelsius(!showCelsius)}
                    className={"temperaturaIcon"}
                >
                    {`${temperatura} `}
                    <img
                        src={showCelsius ? SunIcon46 : SunIcon47}
                        alt="iconC"
                        className="iconCelsius"
                    />
                </div>
            </div>
        );
    }

    /**
     * Converte kelvin em celsius e fahrenheit
     * @param kelvin - temperatura em kelvin
     * @returns
     */
    function convertTemperature(kelvin: string) {
        let fahrenheit = 0;
        let celsius = 0;
        let f = ((parseFloat(kelvin) - 273.15) * 9) / 5 + 32;
        fahrenheit = parseFloat(f.toFixed(2));

        let c = parseFloat(kelvin) - 273.15;
        celsius = parseFloat(c.toFixed(2));
        return { celsius, fahrenheit };
    }

    /**
     * Busca geolocalização na API
     * @param dsCidade - nome da cidade
     */
    function loadGeoLocalization(dsCidade: string) {
        getOpenCageAPI(dsCidade).then((res) => {
            if (res.data.results.length > 0) {
                setCoordinates({
                    lat: res.data.results[0].geometry.lat ?? null,
                    lng: res.data.results[0].geometry.lng ?? null,
                });
            } else {
                cleanPrevisao();
            }
        });
    }

    /**
     * Limpa os campos
     */
    function cleanPrevisao() {
        setCoordinates(null);
        setPrevisaoHoje(initialPrevisao);
        setPrevisaoAmanha(initialPrevisao);
        setPrevisaoDepoisAmanha(initialPrevisao);
        setLoading(false);
    }

    /**
     * Busca a localização com base no navegador
     */
    function getGeolocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (res) => {
                    const coordenatesAux = {
                        lat: res.coords.latitude ?? null,
                        lng: res.coords.longitude ?? null,
                    };
                    setCoordinates(coordenatesAux);
                    getOpenCageAPI(
                        `${coordenatesAux.lat},${coordenatesAux.lng}`
                    ).then((res) =>
                        setDsCidade(res.data.results[0].components.town)
                    );
                },
                () => setLoading(false)
            );
        }
    }
}

export default App;
