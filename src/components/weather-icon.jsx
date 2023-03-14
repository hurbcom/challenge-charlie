import SunIcon from "public/icons/sun.svg";
import CloudsIcon from "public/icons/clouds.svg";
import { useEffect } from "react";

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
    const Icon = WEATHER_ICONS[icon];

    // useEffect(() => {
    //     console.log("icon:", icon);
    //     console.log("Icon:", Icon);
    //     console.log("<Icon />:", <Icon />);
    // }, [icon]);

    return () => <Icon />;
};

export default WeatherIcon;
