import {
    WiDaySunny,
    WiDayCloudy,
    WiCloud,
    WiCloudy,
    WiShowers,
    WiDayRainMix,
    WiLightning,
    WiSnowflakeCold,
    WiFog,
    WiMoonAltNew,
    WiNightCloudy,
    WiNightRainMix
} from "react-icons/wi";

function WeatherIcon({ iconId, className }: any) {
    switch (iconId) {
        case "01d":
            return <WiDaySunny className={className} />;
        case "01n":
            return <WiMoonAltNew className={className} />;
        case "02d":
            return <WiDayCloudy className={className} />;
        case "02n":
            return <WiNightCloudy className={className} />;
        case "03d":
        case "03n":
            return <WiCloud className={className} />;
        case "04d":
        case "04n":
            return <WiCloudy className={className} />;
        case "09d":
        case "09n":
            return <WiShowers className={className} />;
        case "10d":
            return <WiDayRainMix className={className} />;
        case "10n":
            return <WiNightRainMix className={className} />;
        case "11d":
        case "11n":
            return <WiLightning className={className} />;
        case "13d":
        case "13n":
            return <WiSnowflakeCold className={className} />;
        case "50d":
        case "50n":
            return <WiFog className={className} />;
        default:
            return null;
    }
}

export default WeatherIcon