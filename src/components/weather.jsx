import React from "react";

import styles from "@/styles/weather.module.css";
import classNames from "@/utils/classnames";

import compassSvg from "../../public/icons/compass.svg";
import Image from "next/image";

const Weather = () => {
    return (
        <form
            className={classNames(
                "text-2xl bg-white/80 max-w-[640px] mx-auto py-3 px-2",
                "flex items-center",
                styles.search_container
            )}
        >
            <Image className="h-10 w-10" src={compassSvg} alt="compass" />
            <input
                className={classNames(
                    "flex-1 rounded h-12 mx-2 p-2",
                    styles.search_input
                )}
                name="city"
            />
            <button
                className={classNames(
                    "bg-gray-500 text-white",
                    "px-3 py-1 rounded min-w-[112px] h-12"
                )}
                type="submit"
            >
                Search
            </button>
        </form>
    );
};

export default Weather;
