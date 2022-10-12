import React, { useEffect, useState } from "react";

import useGeolocation, { LocationProps } from "./hooks/useGeolocation";
import useReverseGeocoding from './hooks/useReverseGeocoding';
import useOpenWeather from "./hooks/useOpenWeather";
import getOptionsTown, { OptionsTownProps } from "./utils/getOptionsTown";

import capitalize from "./utils/capitalize";
import convertDegToDirection from "./utils/convertDegToDirection";
import convertMsToKmh from "./utils/convertMsToKmh";

import searchIcon from "./assets/searchIcon.svg";

import "./App.css";

const App = () => {
    const initialLocation = useGeolocation();
    const [location, setLocation] = useState<LocationProps>(initialLocation);
    const [unitTemperature, setUnitTemperature] = useState<string>("celsius");
    
    const town = useReverseGeocoding(location);
    const prediction = useOpenWeather(location, unitTemperature);

    const [inputTown, setInputTown] = useState<string>("");
    const [optionsTown, setOptionsTown] = useState<OptionsTownProps>({loaded: false});
    
    const handleChangeInput = async(event: React.ChangeEvent<HTMLInputElement>) => {
        setInputTown(event.target.value)
        setOptionsTown(await getOptionsTown(event.target.value))
    }

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(optionsTown.loaded && optionsTown.towns) {
            setLocation({
                loaded: optionsTown.loaded,
                coordinates: {
                    latitude: optionsTown.towns[0].latitude,
                    longitude: optionsTown.towns[0].longitude,
                }
            })
        }
    }

    const handleOnclickList = (optionsTown: OptionsTownProps) => {
        if(optionsTown.loaded && optionsTown.towns) {
            setInputTown(`${optionsTown.towns[0].direction.split(", ")[0]}, ${optionsTown.towns[0].direction.split(", ")[1]}`)

            setLocation({
                loaded: optionsTown.loaded,
                coordinates: {
                    latitude: optionsTown.towns[0].latitude,
                    longitude: optionsTown.towns[0].longitude,
                }
            })

            setOptionsTown({
                loaded: false
            })
        }
    }

    const handleChangeUnitTemperature = () => {
        if(unitTemperature==="celsius") {
            setUnitTemperature("fahrenheit")
        } else {
            setUnitTemperature("celsius")
        }
    }
    
    useEffect(() => {
        if(initialLocation.loaded && !location.loaded) {
            setLocation(initialLocation)
        }
    }, [initialLocation])

    useEffect(() => {
        if(town.loaded && town.description) {
            setInputTown(`${town.description?.town}, ${town.description?.state}`)
        }
    }, [town])

    return (
        <div className="app">
            {prediction.loaded ?
                <div className="card">
                    <form className="search-form" onSubmit={handleSubmit}>
                        <div className="input">
                            <div className="image">
                                <img className="search-icon" src={searchIcon} alt="ícone" />
                            </div>
                            <input
                                className="search-input"
                                type="text"
                                name="town"
                                placeholder="Buscar Cidade"
                                value={inputTown}
                                onChange={handleChangeInput}
                            />
                        </div>

                        <ul className="options-town">
                            {optionsTown.loaded && optionsTown.towns?.map((town, index) => (
                                <li
                                    key={index}
                                    className="item-list"
                                    onClick={() => handleOnclickList({
                                        loaded: optionsTown.loaded,
                                        towns: [town],
                                    })}
                                >
                                    {town.direction}
                                </li>
                            ))}
                        </ul>
                    </form>

                    <div className="weather-forecast">
                        <div className="current-weather">
                            <div className="image">
                                <img className="weather-icon" src={"/src/assets/weather/"+prediction.weather?.current.icon+".svg"} alt="Ícone" />
                            </div>

                            <div className="weather">
                                <div className="temperature" onClick={handleChangeUnitTemperature}>
                                    <span>HOJE</span>
                                    <span>{prediction.weather?.current.temperature.toFixed(0)}{unitTemperature==="celsius" ? "°C" : "°F"}</span>
                                </div>

                                <span>{capitalize(prediction.weather?.current.description || "")}</span>

                                <div className="more-info">
                                    <span>Vento: {convertDegToDirection(prediction.weather?.current.wind_deg)} {convertMsToKmh(prediction.weather?.current.wind_speed)}Km/h</span>
                                    <span>Humidade: {prediction.weather?.current.humidity}%</span>
                                    <span>Pressão: {prediction.weather?.current.pressure}hPA</span>
                                </div>
                            </div>
                        </div>

                        <div className="temperature tommorow" onClick={handleChangeUnitTemperature}>
                            <span>AMANHÃ</span>
                            <span>{prediction.weather?.tomorrow.temperature}{unitTemperature==="celsius" ? "°C" : "°F"}</span>
                        </div>

                        <div className="temperature" onClick={handleChangeUnitTemperature}>
                            <span>DEPOIS DE AMANHÃ</span>
                            <span>{prediction.weather?.afterTomorrow.temperature}{unitTemperature==="celsius" ? "°C" : "°F"}</span>
                        </div>
                    </div>
                </div>
            :
                <div>Carregando...</div>
            }
        </div>
    );
}

export default App;
