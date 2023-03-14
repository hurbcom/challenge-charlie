import Image from "next/image";

import classNames from "@/utils/classnames";
import sunSvg from "public/icons/sun.svg";
import SunIcon from "public/icons/sun.svg";
// import Icon from "./weather-icon";
import { useEffect } from "react";
import { capitalizeFirstChar } from "@/utils/format";
import WeatherIcon from "./weather-icon";

const AttributeDisplay = ({ label, value }) => (
    <div className="flex text-sm">
        <span className="mr-2">{label}:</span>
        <span>{value}</span>
    </div>
);

const WeatherForecastItem = ({ index, data, active, loading }) => {
    if (!data) {
        return (
            <div
                className={classNames(
                    "flex p-2 text-white",
                    "transition-all duration-300 bg-gray-500/80",
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
                "flex p-2 text-white bg-yellow-400/70",
                "transition-all duration-300",
                active ? "h-64" : "h-24"
            )}
        >
            <div className="w-[55%] flex flex-col justify-center items-center">
                {/* <Image
                    src={sunSvg}
                    alt="sun"
                    className={active ? "h-56 w-56" : "h-20 w-20"}
                /> */}
                <SunIcon className="h-96 w-96 stroke-none fill-current" />
                <WeatherIcon icon={data.icon} />
                {/* <Icon svg={SunIcon} /> */}
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
