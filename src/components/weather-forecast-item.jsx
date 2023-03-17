import classNames from "@/utils/classnames";
import CelsiusIcon from "public/icons/celsius.svg";
import SwitchIcon from "public/icons/switch.svg";
import FahrenheitIcon from "public/icons/fahrenheit.svg";
import { capitalizeFirstChar, getDirections } from "@/utils/format";
import WeatherIcon from "./weather-icon";
import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "@/utils/weather-context";
import { colorOptions, getForecastBgColor } from "@/utils/bgColor";
import AttributeDisplay from "./attribute-display";

const WeatherForecastItem = ({ index, data, active }) => {
    const [bgColor, setBgColor] = useState("");
    const { unit, handleToggleUnit, loading } = useContext(WeatherContext);
    const iconSize = active ? "160px" : "44px";

    useEffect(() => {
        if (data) {
            const temp = Number(data.temp.metric);
            const color = getForecastBgColor(temp)
            setBgColor(color);
        }
    }, [data]);

    if (!data || !bgColor || loading) {
        return (
            <div
                className={classNames(
                    "flex p-2 text-white",
                    "transition-all duration-300 ",
                    "bg-gray-700/80",
                    active
                        ? "h-auto sm:h-64 flex-col sm:flex-row"
                        : "h-32 sm:h-24"
                )}
                style={{ background: colorOptions['gray'][index] }}
            >
                <div
                    className={classNames(
                        "flex flex-col justify-center items-center",
                        active ? "w-full sm:w-[55%]" : "w-[55%]",
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
                        "flex flex-col h-full justify-center",
                        active ? "w-full sm:w-[45%]" : "w-[45%]",
                        loading ? "animate-pulse" : ""
                    )}
                >
                    <div className={active ? "h-40" : "h-14"}>
                        <div
                            className={classNames(
                                "flex flex-col",
                                active
                                    ? "my-4 sm:mt-0 items-center sm:items-start"
                                    : "h-full justify-center"
                            )}
                        >
                            <div className="h-4 w-[45%] bg-slate-700 rounded mb-3"></div>
                            <div className="h-3 w-[25%] bg-slate-700 rounded"></div>
                        </div>
                        {active && (
                            <div className="flex flex-col items-center sm:items-start">
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
                "forecast-item-full",
                "flex p-2 text-white bg-blue-600/80",
                "transition-all duration-300",
                active ? "h-auto sm:h-64 flex-col sm:flex-row" : "h-32 sm:h-24"
            )}
            style={{ background: colorOptions[bgColor][index] }}
            id={`forecast-item-${index}`}

        >
            <div
                className={classNames(
                    "flex flex-col justify-center items-center py-3",
                    active ? "w-full sm:w-[55%]" : "w-[55%]"
                )}
            >
                <WeatherIcon
                    icon={data.icon}
                    width={iconSize}
                    height={iconSize}
                />
            </div>
            <div
                className={classNames(
                    "flex flex-col h-full",
                    active ? "w-full sm:w-[45%]" : "w-[45%] justify-center"
                )}
            >
                <div
                    className={classNames(
                        "flex flex-col select-none",
                        active ? "items-center sm:items-start mb-4" : ""
                    )}
                >
                    <span className="text-lg">{data.label.toUpperCase()}</span>
                    <button
                        className="flex items-center h-11 cursor-pointer"
                        onClick={() => handleToggleUnit()}
                        type="button"
                        data-testid="temp-btn"
                        id={`temp-btn-${index}`}
                    >
                        <span
                            data-testid="temp"
                            id={`temp-${index}`}
                            className="text-xl font-semibold"
                        >
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
                        <div className="flex items-center justify-center mt-[2px]">
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
                        </div>
                    </button>
                </div>
                {active && (
                    <div className="flex flex-col text-center sm:text-left">
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
