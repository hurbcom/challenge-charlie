import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import classNames from "@/utils/classnames";
import compassSvg from "public/icons/compass.svg";
import styles from "@/styles/weather.module.css";
import useLocation from "@/hooks/use-location";
import { getWeather } from "@/services/weather";

const SearchBar = () => {
    const [city, setCity] = useState("");
    const searchForm = useRef(null);

    const location = useLocation();

    // useEffect(() => {
    //     if (location && !city) {
    //         const cityString = `${location.city}, ${location.state}`;
    //         setCity(cityString);
    //     }
    // }, [location]);

    const handleSubmit = (e) => {
        e?.preventDefault();
        console.log("city:", city);
        console.log("submit");
        handleSearchWeather(city);
    };

    const handleSearchWeather = async (locationName) => {
        const weather = await getWeather(locationName);
        console.log("weather:", weather);
    };

    return (
        <form
            className={classNames(
                "text-3xl bg-white/80 max-w-[640px] mx-auto py-3 px-2",
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
