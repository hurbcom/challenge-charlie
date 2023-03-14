import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";

import classNames from "@/utils/classnames";
import compassSvg from "public/icons/compass.svg";
import CompassIcon from "public/icons/compass.svg";
import styles from "@/styles/weather.module.css";
import useGeolocation from "@/hooks/use-geolocation";
import { getWeather } from "@/services/weather";
import { getCoordinates } from "@/services/location";
import { WeatherContext } from "@/utils/weather-context";

const SearchBar = () => {
    const searchInput = useRef(null);

    const geolocation = useGeolocation();
    const { city, setCity, handleSearchForecast, setLoading } =
        useContext(WeatherContext);

    useEffect(() => {
        if (geolocation && !city) {
            const cityString = `${geolocation.city}, ${geolocation.state}`;
            setCity(cityString);
        }
    }, [geolocation]);

    const handleSubmit = async (e) => {
        e?.preventDefault();
        if (searchInput) {
            searchInput.current.blur();
        }
        setLoading(true);
        const { lat, lon } = await handleGetCityCoordinates(city);
        await handleSearchForecast(lat, lon);
        setLoading(false);
    };

    const handleGetCityCoordinates = async (locationName) => {
        const coords = await getCoordinates(locationName);
        setCity(coords.locationName);
        return {
            lat: coords.latitude,
            lon: coords.longitude,
        };
    };

    return (
        <form
            className={classNames(
                "text-3xl font-semibold bg-white/70 py-3 px-2",
                "flex items-center",
                styles.search_container
            )}
            onSubmit={handleSubmit}
        >
            {/* <Image
                className={classNames("h-10 w-10", styles.compass)}
                src={compassSvg}
                alt="compass"
            /> */}
            <CompassIcon className="h-12 w-12 fill-current text-white" />
            <input
                className={classNames(
                    "flex-1 rounded h-12 mx-2 p-2 outline-none",
                    styles.search_input
                )}
                ref={searchInput}
                name="city"
                placeholder="Digite a cidade aqui"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <div className="h-10 w-10"></div>
            {/* <button
                className={classNames(
                    "bg-gray-500 text-white",
                    "px-3 py-1 rounded min-w-[112px] h-12",
                    "transition-opacity duration-200 opacity-100 hover:opacity-80"
                )}
                type="submit"
            >
                Search
            </button> */}
        </form>
    );
};

export default SearchBar;
