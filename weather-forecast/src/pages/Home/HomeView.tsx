import React from "react";
import "./styles.css";
import compass from "../../assets/meteocons-icons/44.svg";
import Skeleton from "@mui/material/Skeleton";
import { HomeViewProps } from "./interface";
import { Alert } from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";

export const HomeView = ({
    afterTomorrow,
    error,
    handleInputChange,
    handleKeyDown,
    humidity,
    icon,
    inputValue,
    isCelsius,
    loading,
    pressure,
    temperature,
    afterTomorrowColor,
    todayColor,
    tomorrowColor,
    toggleTemperatureUnit,
    tomorrow,
    weather,
    wind,
}: HomeViewProps) => {
    return (
        <div className={`weather-container gray`}>
            {error && (
                <Alert
                    icon={<ErrorOutline fontSize="inherit" />}
                    severity="error"
                >
                    O tempo fechou! Algo deu errado ao pegar dados da
                    localização ou temperatura!
                </Alert>
            )}
            <div className="weather-header">
                <img src={compass} className="compass-icon" alt="compass" />
                <input
                    style={{ opacity: loading ? 0.3 : 1 }}
                    className="weather-input"
                    type="text"
                    value={inputValue}
                    disabled={loading}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Digite aqui sua cidade!"
                />
            </div>
            <div className={`weather-today ${todayColor}`}>
                {loading ? (
                    <Skeleton
                        variant="rectangular"
                        width={"100%"}
                        height={"100%"}
                    />
                ) : (
                    <div className="weather-today-icon-container">
                        {icon && (
                            <img
                                src={require(`../../assets/meteocons-icons/${icon}.svg`)}
                                className="weather-today-icon"
                                alt="compass"
                            />
                        )}
                    </div>
                )}
                {loading ? (
                    <Skeleton
                        variant="rectangular"
                        width={"100%"}
                        height={"100%"}
                    />
                ) : (
                    <div className="weather-today-infos">
                        <h2>HOJE</h2>
                        <h2
                            className="description"
                            onClick={toggleTemperatureUnit}
                        >
                            {temperature
                                ? `${temperature}${isCelsius ? "°C" : "°F"}`
                                : "N/A"}
                        </h2>
                        <h2 className="details">{weather ? weather : "N/A"}</h2>
                        <h3>Vento: {wind ? `NO ${wind}km/h` : "N/A"}</h3>
                        <h3>Humidade: {humidity ? `${humidity}%` : "N/A"}</h3>
                        <h3>Pressão: {pressure ? `${pressure} hPa` : "N/A"}</h3>
                    </div>
                )}
            </div>
            <div className="weather-forecast">
                <div className={`day ${tomorrowColor}`}>
                    {loading ? (
                        <Skeleton
                            variant="rectangular"
                            width={"100%"}
                            height={"60%"}
                        />
                    ) : (
                        <div>
                            <h3>AMANHÃ</h3>
                            <p onClick={toggleTemperatureUnit}>
                                {tomorrow
                                    ? `${tomorrow}${isCelsius ? "°C" : "°F"}`
                                    : "N/A"}
                            </p>
                        </div>
                    )}
                </div>
                <div className={`day ${afterTomorrowColor}`}>
                    {loading ? (
                        <Skeleton
                            variant="rectangular"
                            width={"100%"}
                            height={"60%"}
                        />
                    ) : (
                        <div>
                            <h3>DEPOIS DE AMANHÃ</h3>
                            <p onClick={toggleTemperatureUnit}>
                                {afterTomorrow
                                    ? `${afterTomorrow}${
                                          isCelsius ? "°C" : "°F"
                                      }`
                                    : "N/A"}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
