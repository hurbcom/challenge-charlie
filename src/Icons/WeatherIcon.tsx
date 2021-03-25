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

function WeatherIcon({ iconId }: any) {
    switch (iconId) {
        case "01d":
            return <WiDaySunny />;
        case "02d":
            return <WiDayCloudy />;
        case "03d":
            return <WiCloud />;
        case "04d":
            return <WiCloudy />;
        case "09d":
            return <WiShowers />;
        case "10d":
            return <WiDayRainMix />;
        case "11d":
            return <WiLightning />;
        case "13d":
            return <WiSnowflakeCold />;
        case "50d":
            return <WiFog />;
        default:
            return null;
    }
}

export default WeatherIcon