import {
    WiDaySunny,
    WiDayCloudy,
    WiCloud,
    WiCloudy,
    WiShowers,
    WiDayRainMix,
    WiLightning,
    WiSnowflakeCold,
    WiFog
} from "react-icons/wi";

function WeatherIcon({ iconId, className }: any) {
    switch (iconId) {
        case "01d":
            return <WiDaySunny className={className} />;
        case "02d":
            return <WiDayCloudy className={className} />;
        case "03d":
            return <WiCloud className={className} />;
        case "04d":
            return <WiCloudy className={className} />;
        case "09d":
            return <WiShowers className={className} />;
        case "10d":
            return <WiDayRainMix className={className} />;
        case "11d":
            return <WiLightning className={className} />;
        case "13d":
            return <WiSnowflakeCold className={className} />;
        case "50d":
            return <WiFog className={className} />;
        default:
            return null;
    }
}

export default WeatherIcon