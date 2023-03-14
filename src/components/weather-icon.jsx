import DrizzleIcon from "public/icons/drizzle.svg";
import RainIcon from "public/icons/rain.svg";
import SunIcon from "public/icons/sun.svg";
import SnowIcon from "public/icons/snow.svg";
import CloudsIcon from "public/icons/clouds.svg";
import MistIcon from "public/icons/mist.svg";
import ThunderIcon from "public/icons/thunder.svg";

const WEATHER_ICONS = {
    Thunderstorm: ThunderIcon,
    Drizzle: DrizzleIcon,
    Rain: RainIcon,
    Snow: SnowIcon,
    Mist: MistIcon,
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
