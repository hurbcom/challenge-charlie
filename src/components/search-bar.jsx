import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import classNames from "@/utils/classnames";
import compassSvg from "public/icons/compass.svg";
import CompassIcon from "public/icons/compass.svg";
import styles from "@/styles/weather.module.css";
import useGeolocation from "@/hooks/use-geolocation";
import { getWeather } from "@/services/weather";
import { getCoordinates } from "@/services/location";

const SearchBar = () => {
    const [city, setCity] = useState("");
    const searchForm = useRef(null);

    const geolocation = useGeolocation();

    useEffect(() => {
        if (geolocation && !city) {
            const cityString = `${geolocation.city}, ${geolocation.state}`;
            setCity(cityString);
        }
    }, [geolocation]);

    const handleSubmit = (e) => {
        e?.preventDefault();
        console.log("city:", city);
        console.log("submit");
        handleGetCityCoordinates(city);
        // handleSearchWeather(city);
    };

    const handleSearchWeather = async (locationName) => {
        const weather = await getWeather(locationName);
        console.log("weather:", weather);
    };

    const handleGetCityCoordinates = async (locationName) => {
        const coords = await getCoordinates(locationName);
        console.log("coords:", coords);
        setCity(coords.locationName);
    };

    return (
        <form
            className={classNames(
                "text-3xl font-semibold bg-white/70 py-3 px-2",
                "flex items-center",
                styles.search_container
            )}
            onSubmit={handleSubmit}
            ref={searchForm}
        >
            <Image
                className={classNames("h-10 w-10", styles.compass)}
                src={compassSvg}
                alt="compass"
            />
            {/* <CompassIcon className="h-10 w-10" /> */}
            <input
                className={classNames(
                    "flex-1 rounded h-12 mx-2 p-2 outline-none",
                    styles.search_input
                )}
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
