import SunIcon from "public/icons/sun.svg";
import CloudsIcon from "public/icons/clouds.svg";
import { useEffect } from "react";
import classNames from "@/utils/classnames";

const WEATHER_ICONS = {
    Thunderstorm: "",
    Drizzle: "",
    Rain: "",
    Snow: "",
    Mist: "",
    Clear: SunIcon,
    Clouds: CloudsIcon,
    // Smoke,
    // Haze,
    // Dust,
    // Fog,
    // Sand,
    // Ash,
    // Squail,
    // Tornado,
};

const WeatherIcon = ({ icon }) => {
    const Icon = WEATHER_ICONS[icon] || SunIcon;

    return <Icon className="stroke-none fill-current" />;
};

export default WeatherIcon;
