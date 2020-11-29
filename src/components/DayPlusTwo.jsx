import React from "react";
import { useWeather } from "../hooks/weather";
import classnames from "classnames";
import { useGeo } from "../hooks/geolocation";

function DayPlusTwo() {
    const { dayPlusTwoTemp, scale, loading, switchScale } = useWeather();
    const { locationString, loading: geoLoading } = useGeo();

    // If something went wrong with the geoContext, this messages will be stored on the location string variable;
    const invalidCity =
        locationString === "Cidade inválida" || locationString === "";

    return (
        <div
            className={classnames({
                day_plus_two_container: true,
                "day_plus_two_container--is-hot":
                    (!loading &&
                        !geoLoading &&
                        !invalidCity &&
                        dayPlusTwoTemp > 35 &&
                        scale === "C°") ||
                    (dayPlusTwoTemp > 95 && scale === "F°"),
                "day_plus_two_container--is-cold":
                    (!loading &&
                        !geoLoading &&
                        !invalidCity &&
                        dayPlusTwoTemp < 15 &&
                        scale === "C°") ||
                    (dayPlusTwoTemp < 59 && scale === "F°"),
                "day_plus_two_container--is-warm":
                    (!loading &&
                        !geoLoading &&
                        !invalidCity &&
                        dayPlusTwoTemp > 15 &&
                        dayPlusTwoTemp < 35 &&
                        scale === "C°") ||
                    (dayPlusTwoTemp > 59 &&
                        dayPlusTwoTemp < 95 &&
                        scale === "F°"),
            })}
        >
            <div className="day_plus_two_container--content">
                {loading || geoLoading ? (
                    <>
                        <h2>Carregando...</h2>
                        <h2>Carregando...</h2>
                    </>
                ) : invalidCity ? (
                    <>
                        <h2>DEPOIS DE AMANHÃ</h2>
                        <h2></h2>
                    </>
                ) : (
                    <>
                        <h2>DEPOIS DE AMANHÃ</h2>
                        <h2>
                            <span
                                className="main_info_container--data_info--today_temp--switch_temp"
                                onClick={() => switchScale()}
                            >
                                {dayPlusTwoTemp} {scale}
                            </span>
                        </h2>
                    </>
                )}
            </div>
        </div>
    );
}

export default DayPlusTwo;
