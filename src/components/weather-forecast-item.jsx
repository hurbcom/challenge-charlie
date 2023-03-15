import classNames from "@/utils/classnames";
import SunIcon from "public/icons/sun.svg";
import CelsiusIcon from "public/icons/celsius.svg";
import SwitchIcon from "public/icons/switch.svg";
import FahrenheitIcon from "public/icons/fahrenheit.svg";
import { capitalizeFirstChar, getDirections } from "@/utils/format";
import WeatherIcon from "./weather-icon";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { WeatherContext } from "@/utils/weather-context";

const AttributeDisplay = ({ label, value }) => (
    <div className="flex text-sm">
        <span className="mr-2">{label}:</span>
        <span>{value}</span>
    </div>
);

const colorOptions = {
    blue: [
        "rgb(96 165 250 / 0.8)",
        "rgb(59 130 246 / 0.8)",
        "rgb(37 99 235 / 0.8)",
    ],
    red: [
        "rgb(239 68 68 / 0.8)",
        "rgb(220 38 38 / 0.8)",
        "rgb(185 28 28 / 0.8)",
    ],
    yellow: [
        "rgb(250 204 21 / 0.8)",
        "rgb(234 179 8 / 0.9)",
        "rgb(202 138 4 / 1)",
    ],
};

const WeatherForecastItem = ({
    index,
    data,
    active,
    loading,
    // unit,
    // handleToggleUnit,
}) => {
    const [bgColor, setBgColor] = useState("");
    const { unit, handleToggleUnit } = useContext(WeatherContext);

    useEffect(() => {
        if (data) {
            const temp = Number(data.temp.metric);
            let color = "yellow";
            if (temp > 35) {
                color = "red";
            }
            if (temp < 15) {
                color = "blue";
            }
            setBgColor(color);
        }
    }, [data]);

    if (!data || !bgColor || loading) {
        return (
            <div
                className={classNames(
                    "flex p-2 text-white",
                    "transition-all duration-300 ",
                    index === 0
                        ? "bg-gray-500/80"
                        : index == 1
                        ? "bg-gray-500/90"
                        : "bg-gray-500",
                    active ? "h-64" : "h-24"
                )}
            >
                <div
                    className={classNames(
                        "w-[55%] flex flex-col justify-center items-center",
                        loading ? "animate-pulse" : ""
                    )}
                >
                    <div
                        className={classNames(
                            "rounded-full bg-slate-700",
                            active ? "h-48 w-48" : "h-16 w-16"
                        )}
                    />
                </div>
                <div
                    className={classNames(
                        "w-[45%] flex flex-col h-full justify-center",
                        loading ? "animate-pulse" : ""
                    )}
                >
                    <div className={active ? "h-40" : "h-14"}>
                        <div className="flex flex-col mb-4">
                            <div className="h-4 w-[45%] bg-slate-700 rounded mb-3"></div>
                            <div className="h-3 w-[25%] bg-slate-700 rounded"></div>
                        </div>
                        {active && (
                            <div className="flex flex-col">
                                <div className="h-4 w-[50%] bg-slate-700 rounded mb-3"></div>
                                <div className="w-[70%]">
                                    <div className="h-2 bg-slate-700 rounded mb-2"></div>
                                    <div className="h-2 bg-slate-700 rounded mb-2"></div>
                                    <div className="h-2 bg-slate-700 rounded mb-2"></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            className={classNames(
                "flex p-2 text-white bg-blue-600/80",
                "transition-all duration-300",
                active ? "h-64" : "h-24"
            )}
            style={{ background: colorOptions[bgColor][index] }}
        >
            <div className="w-[55%] flex flex-col justify-center items-center py-3">
                <WeatherIcon icon={data.icon} />
            </div>
            <div className="w-[45%] flex flex-col h-full">
                <div className="flex flex-col mb-4 select-none">
                    <span className="text-lg">{data.label.toUpperCase()}</span>
                    <div className="flex items-center h-11 cursor-pointer">
                        <span className="text-xl font-semibold">
                            {Math.round(data.temp[unit])}
                        </span>
                        {unit === "metric" ? (
                            <CelsiusIcon
                                className="fill-current mt-[2px] ml-[-6px]"
                                width="44px"
                                height="100%"
                            />
                        ) : (
                            <FahrenheitIcon
                                className="fill-current mt-[2px] ml-[-6px]"
                                width="44px"
                                height="100%"
                            />
                        )}
                        <button
                            className="flex items-center justify-center mt-[2px]"
                            onClick={() => handleToggleUnit()}
                        >
                            <SwitchIcon className="fill-current" width="18px" />
                            <span className="fill-current opacity-80">
                                {unit === "metric" ? (
                                    <FahrenheitIcon
                                        width="36px"
                                        height="100%"
                                    />
                                ) : (
                                    <CelsiusIcon width="36px" height="100%" />
                                )}
                            </span>
                        </button>
                    </div>
                </div>
                {active && (
                    <div className="flex flex-col">
                        <span className="text-2xl mb-2">
                            {capitalizeFirstChar(data.description)}
                        </span>
                        <AttributeDisplay
                            label="Vento"
                            value={`${getDirections(
                                data.wind_deg
                            )} ${Math.round(data.wind_speed * 3.6)}km/h`}
                        />
                        <AttributeDisplay
                            label="Umidade"
                            value={`${data.humidity}%`}
                        />
                        <AttributeDisplay
                            label="Pressao"
                            value={`${data.pressure}hPA`}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default WeatherForecastItem;
