import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";

import classNames from "@/utils/classnames";
import CompassIcon from "public/icons/compass.svg";
import styles from "@/styles/weather.module.css";
import useGeolocation from "@/hooks/use-location";
import { getWeather } from "@/services/weather";
import { getCoordinates } from "@/services/location";
import { WeatherContext } from "@/utils/weather-context";
import ArrowRightIcon from "public/icons/arrow-right.svg";
import LoadingIndicator from "./loading-indicator";

const SearchBar = () => {
    const searchInput = useRef(null);

    const { geolocation, handleGetCityCoordinates } = useGeolocation();
    const { city, setCity, handleSearchForecast, setLoading, loading } =
        useContext(WeatherContext);

    useEffect(() => {
        if (geolocation && !city) {
            const cityString = `${geolocation.city}, ${geolocation.state}`;
            setCity(cityString);
            handleGetWeather(cityString);
        }
    }, [geolocation]);

    const handleSubmit = async (e) => {
        e?.preventDefault();
        if (!city) {
            return;
        }
        await handleGetWeather(city);
        setLoading(false);
    };

    const handleGetWeather = async (locationName) => {
        setLoading(true);
        try {
            if (searchInput) {
                searchInput.current.blur();
            }
            const { lat, lon } = await handleGetCityCoordinates(locationName);
            await handleSearchForecast(lat, lon);
        } catch (error) {
        } finally {
            setLoading(false);
        }
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
                placeholder="Digite a cidade aqui"
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
