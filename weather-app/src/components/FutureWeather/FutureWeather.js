import "./FutureWeather.css";
import { handleBackgroundColor } from "../../utils/customStyle";

export default function FutureWeather({ label, temperature, color }) {
    const { tomorrowColor, afterTomorrowColor } =
        handleBackgroundColor(temperature);
    let backgroundColor = "";

    if (color === 0) {
        backgroundColor = tomorrowColor;
    } else {
        backgroundColor = afterTomorrowColor;
    }

    return (
        <div
            className="future-weather-container"
            style={{ background: backgroundColor }}
        >
            <div className="future-weather-gap"></div>
            <div className="future-weather-data">
                <span>{label}</span>
                <p>{temperature}°C</p>
            </div>
        </div>
    );
}
