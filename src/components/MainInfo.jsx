import React from "react";
import ReactLoading from "react-loading";
import classnames from "classnames";
import Sun from "../icons/2.svg";
import Temporal from "../icons/27.svg";
import Chuvisco from "../icons/17.svg";
import Chuva from "../icons/18.svg";
import Neve from "../icons/23.svg";
import Ensolarado from "../icons/2.svg";
import Nublado from "../icons/25.svg";
import Ventania from "../icons/6.svg";
import NA from "../icons/45.svg";
import { useWeather } from "../hooks/weather";
import { useGeo } from "../hooks/geolocation";

const MainInfo = () => {
    const {
        todayTemp,
        weather,
        wind,
        scale,
        direction,
        humidity,
        pressure,
        loading,
        switchScale,
    } = useWeather();

    const { locationString, loading: geoLoading } = useGeo();

    // If something went wrong with the geoContext, this messages will be stored on the location string variable;
    const invalidCity =
        locationString === "Cidade inválida" || locationString === "";

    const renderIcon = (weather) => {
        switch (weather) {
            case "Temporal":
                return <Temporal />;
            case "Chuvisco":
                return <Chuvisco />;
            case "Chuva":
                return <Chuva />;
            case "Neve":
                return <Neve />;
            case "Ensolarado":
                return <Ensolarado />;
            case "Nublado":
                return <Nublado />;
            default:
                return <Ventania />;
        }
    };
    return (
        <div
            className={classnames({
                main_info_container: true,
                //classnames is a way to apply a class by some condition.
                "main_info_container--is-hot":
                    !loading && // After check if all loadings are ended, we see if the temperature in each scale correspond with the class that i want to apply.
                    !geoLoading &&
                    !invalidCity &&
                    ((todayTemp > 35 && scale === "C°") ||
                        (todayTemp > 95 && scale === "F°")),
                "main_info_container--is-cold":
                    !loading &&
                    !geoLoading &&
                    !invalidCity &&
                    ((todayTemp < 15 && scale === "C°") ||
                        (todayTemp < 59 && scale === "F°")),
                "main_info_container--is-warm":
                    !loading &&
                    !geoLoading &&
                    !invalidCity &&
                    ((todayTemp > 15 && todayTemp < 35 && scale === "C°") ||
                        (todayTemp > 59 && todayTemp < 95 && scale === "F°")),
            })}
        >
            {loading || geoLoading ? (
                <ReactLoading width={"40vmin"} height={"40vmin"} />
            ) : invalidCity ? (
                <NA />
            ) : (
                renderIcon(weather)
            )}
            <div className="main_info_container--data_info">
                <div className="main_info_container--data_info--today_temp">
                    {loading || geoLoading ? ( // while loading, we render loading message to avoid break with undefined variables.
                        <>
                            <h2>Carregando ...</h2>
                            <h2>Carregando ...</h2>
                        </>
                    ) : invalidCity ? ( // if the invalid messages activate this bool, we render an empty typo
                        <>
                            <h2>HOJE</h2>
                        </>
                    ) : (
                        <>
                            <h2>HOJE</h2>
                            <h2>
                                <span
                                    className="main_info_container--data_info--today_temp--switch_temp"
                                    onClick={() => switchScale()} // function that change the scale of temp
                                >
                                    {todayTemp} {scale}
                                </span>
                            </h2>
                        </>
                    )}
                </div>
                {loading || geoLoading ? (
                    <h2>Carregando...</h2>
                ) : invalidCity ? (
                    <h2></h2>
                ) : (
                    <h2>{weather}</h2>
                )}
                <div className="main_info_container--data_info--others_info">
                    {loading || geoLoading ? (
                        <h3>Carregando ...</h3>
                    ) : invalidCity ? (
                        <h3>Vento:</h3>
                    ) : (
                        <h3>
                            Vento: {direction} {wind}km/h
                        </h3>
                    )}
                    {loading || geoLoading ? (
                        <h3>Carregando ...</h3>
                    ) : invalidCity ? (
                        <h3>Humidade: </h3>
                    ) : (
                        <h3>Humidade: {humidity}%</h3>
                    )}
                    {loading || geoLoading ? (
                        <h3>Carregando ...</h3>
                    ) : invalidCity ? (
                        <h3>Pressão: </h3>
                    ) : (
                        <h3>Pressão: {pressure}hPA</h3>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MainInfo;
