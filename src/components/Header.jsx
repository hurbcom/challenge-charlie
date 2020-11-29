import React, { useCallback, useEffect, useState } from "react";
import Compass from "../icons/44.svg";
import { useGeo } from "../hooks/geolocation";
import { useWeather } from "../hooks/weather";

function Header() {
    const {
        locationString,
        getUserCurrentLocation,
        loading,
        getInputLocation,
        lat,
        long,
    } = useGeo();
    const { getWeatherInfo } = useWeather();
    const [value, setValue] = useState("");

    const handleChange = useCallback(
        (e) => {
            setValue(e.target.value);
        },
        [setValue]
    );

    // Trigger the function by the enter button
    const handleSubmit = useCallback((e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            e.stopPropagation();

            getInputLocation(e.target.value);
        }
    }, []);

    // Getting geo info of the user
    useEffect(() => {
        getUserCurrentLocation();
    }, []);

    // if 'locationString' changes his value, set the input value with this
    useEffect(() => {
        setValue(locationString);
    }, [locationString]);

    // if lat && long changes his values, call weather function, only if they are not null.
    useEffect(() => {
        if (lat && long) {
            getWeatherInfo(lat, long);
        }
    }, [lat, long]);

    return (
        <div className="header_container">
            <Compass />
            {loading ? (
                <h3>Aguarde...</h3>
            ) : (
                <form
                    className="header_container--input_form"
                    onKeyDown={handleSubmit}
                >
                    <input
                        type="text"
                        value={value}
                        placeholder="Digite o nome de uma cidade"
                        onChange={handleChange}
                        className="header_container--input_location"
                        autoFocus={false}
                    />
                </form>
            )}
        </div>
    );
}

export default Header;
