import React, { useContext, useEffect, useRef, useState } from "react";

import classNames from "@/utils/classnames";
import CompassIcon from "public/icons/compass.svg";
import styles from "@/styles/weather.module.css";
import useGeolocation from "@/hooks/use-location";
import { WeatherContext } from "@/utils/weather-context";
import ArrowRightIcon from "public/icons/arrow-right.svg";
import LoadingIndicator from "./loading-indicator";

const SearchBar = () => {
    const searchInput = useRef(null);

    const { city, setCity, loading, handleGetWeather } =
        useContext(WeatherContext);

    const handleSubmit = async (e) => {
        e?.preventDefault();
        if (!city) {
            return;
        }
        if (searchInput) {
            searchInput.current.blur();
        }
        await handleGetWeather(city);
    };

    return (
        <form
            className={classNames(
                "w-full text-3xl font-semibold bg-white/70 py-3 px-2",
                "flex items-center transition-colors duration-200",
                styles.search_container
            )}
            onSubmit={handleSubmit}
        >
            <CompassIcon className="h-12 w-12 fill-current" />
            <input
                className={classNames(
                    "flex-1 rounded h-12 mx-2 p-2 outline-none w-full",
                    styles.search_input
                )}
                ref={searchInput}
                name="city"
                placeholder="Digite a localidade aqui"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <div className="h-12 w-12 transition-all">
                <button
                    className={classNames(
                        "h-full w-full p-2 cursor-pointer",
                        "transition-all",
                        loading ? "" : "hover:ml-2"
                    )}
                    disabled={loading}
                    type="submit"
                >
                    {loading ? (
                        <LoadingIndicator />
                    ) : (
                        <ArrowRightIcon className="stroke-current fill-current" />
                    )}
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
