import React from "react";
import { FaEye } from "react-icons/fa";
import {
    convertTemperature,
    getColorForTemperature,
    roundToInteger,
} from "../utils/other";

/** Weather panel data structure */
interface PanelData {
    localization: string;
    /** Current weather status */
    status: string;
    temp: number;
    /** Km/h wind */
    wind: number;
    humidity: number;
    /** hPA pressure */
    pressure: number;
    tomorrowTemp: number;
    theDayAfterTomorrowTemp: number;
    /** Meteocons font symbol */
    icon: string;
}

interface PanelProps {
    data: PanelData | null;
    onLocalizationChange: (newLocalization: string) => void;
}

/** Interactive weather dashboard component */
export function Panel(props: PanelProps) {
    const { data, onLocalizationChange } = props;

    const [isCelsius, setIsCelsius] = React.useState(true);
    const [localization, setlocalization] = React.useState(
        data ? data.localization : ""
    );
    const [isHighContrast, setIsHighContrast] = React.useState(false);

    React.useEffect(() => {
        setlocalization(data ? data.localization : "");
    }, [data?.localization]);

    const toggleTemperature = () => {
        setIsCelsius(!isCelsius);
    };

    const toggleHighContrast = () => {
        document.body.classList.toggle("high-contrast");
        setIsHighContrast(!isHighContrast);
    };

    const tempToday = data ? data.temp : 0,
        tempTomorrow = data ? data.tomorrowTemp : 0,
        tempAfterTomorrow = data ? data.theDayAfterTomorrowTemp : 0;

    const convertedTempToday = convertTemperature(tempToday, isCelsius);
    const convertedTempTomorrow = convertTemperature(tempTomorrow, isCelsius);
    const convertedTempAfterTomorrow = convertTemperature(
        tempAfterTomorrow,
        isCelsius
    );
    function getColor(temp: number, opacity: number, shift: number): string {
        if (isHighContrast) {
            return "black";
        } else if (data) {
            let color = getColorForTemperature(temp);
            color.r -= shift;
            color.g -= shift;
            color.b -= shift;
            return `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;
        } else {
            return "grey";
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setlocalization(event.target.value);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            onLocalizationChange(localization);
        }
    };
    return (
        <div className="weather-app-container">
            <div className="weather-header">
                <a className="location-icon" data-icon="("></a>
                <input
                    className="location-input"
                    style={
                        isHighContrast
                            ? { backgroundColor: "black", color: "white" }
                            : undefined
                    }
                    type="text"
                    value={localization}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    placeholder="Digite a localização"
                />
                <div
                    onClick={toggleHighContrast}
                    className="toggle-contrast-btn"
                >
                    <FaEye />
                </div>
            </div>
            <div
                className="weather-display-area"
                style={{
                    backgroundColor: getColor(tempToday, 0.7, 0),
                }}
            >
                <div className="weather-icon-container">
                    <a
                        className="current-weather-icon"
                        data-icon={data ? data.icon : ""}
                    ></a>
                </div>

                <div className="weather-info">
                    <div className="today-weather-summary">
                        <span>HOJE</span>
                        <span
                            onClick={toggleTemperature}
                            style={{ cursor: "pointer" }}
                        >
                            {data
                                ? `${roundToInteger(convertedTempToday)}°${
                                      isCelsius ? "C" : "F"
                                  }`
                                : "--°C"}
                        </span>
                    </div>
                    <div className="current-weather-status">
                        <span>{data ? data.status : "--"}</span>
                    </div>
                    <div className="additional-weather-details">
                        <span>
                            Vento: {data ? `NO ${data.wind}km/h` : "--km/h"}
                        </span>
                        <span>
                            Umidade: {data ? `${data.humidity}%` : "--%"}
                        </span>
                        <span>
                            Pressão: {data ? `${data.pressure}hPA` : "--hPA"}
                        </span>
                    </div>
                </div>
            </div>
            <div
                className="tomorrow-weather-container"
                style={{
                    backgroundColor: getColor(tempTomorrow, 0.85, 0),
                }}
            >
                <div className="future-weather-info">
                    <span>AMANHÃ</span>
                    <span
                        onClick={toggleTemperature}
                        style={{ cursor: "pointer" }}
                    >
                        {data
                            ? `${roundToInteger(convertedTempTomorrow)}°${
                                  isCelsius ? "C" : "F"
                              }`
                            : "--°C"}
                    </span>
                </div>
            </div>
            <div
                className="day-after-tomorrow-weather-container"
                style={{
                    backgroundColor: getColor(tempAfterTomorrow, 0.85, 20),
                }}
            >
                <div className="future-weather-info">
                    <span>DEPOIS DE AMANHÃ</span>
                    <span
                        onClick={toggleTemperature}
                        style={{ cursor: "pointer" }}
                    >
                        {data
                            ? `${roundToInteger(convertedTempAfterTomorrow)}°${
                                  isCelsius ? "C" : "F"
                              }`
                            : "--°C"}
                    </span>
                </div>
            </div>
        </div>
    );
}
