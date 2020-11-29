import React from "react";
import classnames from "classnames";
import { useWeather } from "../hooks/weather";
import { useGeo } from "../hooks/geolocation";

function DayPlusOne() {
    const { dayPlusOneTemp, scale, loading, switchScale } = useWeather();
    const { locationString, loading: geoLoading } = useGeo();

    // If something went wrong with the geoContext, this messages will be stored on the location string variable;
    const invalidCity =
        locationString === "Cidade inválida" || locationString === "";

    return (
        <div
            className={classnames({
                //classnames is a way to apply a class by some condition.
                day_plus_one_container: true,
                "day_plus_one_container--is-hot":
                    (!loading && // After check if all loadings are ended, we see if the temperature in each scale correspond with the class that i want to apply.
                        !geoLoading &&
                        !invalidCity &&
                        dayPlusOneTemp > 35 &&
                        scale === "°C") ||
                    (dayPlusOneTemp > 95 && scale === "°F"),
                "day_plus_one_container--is-cold":
                    (!loading &&
                        !geoLoading &&
                        !invalidCity &&
                        dayPlusOneTemp < 15 &&
                        scale === "°C") ||
                    (dayPlusOneTemp < 59 && scale === "°F"),
                "day_plus_one_container--is-warm":
                    (!loading &&
                        !geoLoading &&
                        !invalidCity &&
                        dayPlusOneTemp > 15 &&
                        dayPlusOneTemp < 35 &&
                        scale === "°C") ||
                    (dayPlusOneTemp > 59 &&
                        dayPlusOneTemp < 95 &&
                        scale === "°F"),
            })}
        >
            <div className="day_plus_one_container--content">
                {loading || geoLoading ? (
                    <>
                        <h2>Carregando...</h2>
                        <h2>Carregando...</h2>
                    </>
                ) : invalidCity ? (
                    <>
                        <h2>AMANHÃ</h2>
                        <h2></h2>
                    </>
                ) : (
                    <>
                        <h2>AMANHÃ</h2>
                        <h2>
                            <span
                                className="main_info_container--data_info--today_temp--switch_temp"
                                onClick={() => switchScale()}
                            >
                                {dayPlusOneTemp} {scale}
                            </span>
                        </h2>
                    </>
                )}
            </div>
        </div>
    );
}

export default DayPlusOne;
