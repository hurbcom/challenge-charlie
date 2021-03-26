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

function WeatherIcon({ iconId, style }: any) {
    switch (iconId) {
        case "01d":
            return <WiDaySunny style={style} />;
        case "02d":
            return <WiDayCloudy style={style} />;
        case "03d":
            return <WiCloud style={style} />;
        case "04d":
            return <WiCloudy style={style} />;
        case "09d":
            return <WiShowers style={style} />;
        case "10d":
            return <WiDayRainMix style={style} />;
        case "11d":
            return <WiLightning style={style} />;
        case "13d":
            return <WiSnowflakeCold style={style} />;
        case "50d":
            return <WiFog style={style} />;
        default:
            return null;
    }
}

export default WeatherIcon