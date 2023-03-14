import classNames from "@/utils/classnames";
import SunIcon from "public/icons/sun.svg";
import { capitalizeFirstChar } from "@/utils/format";
import WeatherIcon from "./weather-icon";
import { useCallback, useEffect, useRef, useState } from "react";

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

const WeatherForecastItem = ({ index, data, active, loading }) => {
    const [bgColor, setBgColor] = useState("");

    useEffect(() => {
        if (data) {
            console.log("data:", data);
            const temp = Number(data.temp);
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

    if (!data || !bgColor) {
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
            <div className="w-[55%] flex flex-col justify-center items-center">
                <WeatherIcon icon={data.icon} />
            </div>
            <div className="w-[45%] flex flex-col h-full">
                <div className="flex flex-col mb-4">
                    <span className="text-lg">{data.label.toUpperCase()}</span>
                    <span className="">{data.temp}</span>
                </div>
                {active && (
                    <div className="flex flex-col">
                        <span className="text-2xl mb-2">
                            {capitalizeFirstChar(data.description)}
                        </span>
                        <AttributeDisplay
                            label="Vento"
                            value={`NO ${data.wind_speed}km/h`}
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
