import Image from "next/image";

import classNames from "@/utils/classnames";
import sunSvg from "public/icons/sun.svg";
import SunIcon from "public/icons/sun.svg";
import Icon from "./icon";
import { useEffect } from "react";

const AttributeDisplay = ({ label, value }) => (
    <div className="flex text-sm">
        <span className="mr-2">{label}:</span>
        <span>{value}</span>
    </div>
);

const WeatherForecastItem = ({ day, index, data = true, active }) => {
    if (!data) {
        return (
            <div
                className={classNames(
                    "flex p-2 text-white",
                    "transition-all duration-300 bg-gray-500/80",
                    active ? "h-64" : "h-24"
                )}
            >
                <div className="w-[55%] flex flex-col justify-center items-center animate-pulse">
                    <div
                        className={classNames(
                            "rounded-full bg-slate-300",
                            active ? "h-48 w-48" : "h-16 w-16"
                        )}
                    />
                </div>
                <div className="w-[45%] flex flex-col h-full animate-pulse justify-center">
                    <div className={active ? "h-40" : "h-14"}>
                        <div className="flex flex-col mb-4">
                            <div className="h-4 w-[45%] bg-slate-300 rounded mb-3"></div>
                            <div className="h-3 w-[25%] bg-slate-300 rounded"></div>
                        </div>
                        {active && (
                            <div className="flex flex-col">
                                <div className="h-4 w-[50%] bg-slate-300 rounded mb-3"></div>
                                <div className="w-[70%]">
                                    <div className="h-2 bg-slate-300 rounded mb-2"></div>
                                    <div className="h-2 bg-slate-300 rounded mb-2"></div>
                                    <div className="h-2 bg-slate-300 rounded mb-2"></div>
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
                <Image
                    src={sunSvg}
                    alt="sun"
                    className={active ? "h-56 w-56" : "h-20 w-20"}
                />
                {/* <SunIcon className="h-96 w-96 stroke-none fill-current" /> */}
                {/* <Icon svg={SunIcon} /> */}
            </div>
            <div className="w-[45%] flex flex-col h-full">
                <div className="flex flex-col mb-4">
                    <span className="text-lg">{day.toUpperCase()}</span>
                    <span className="">32C</span>
                </div>
                {active && (
                    <div className="flex flex-col">
                        <span className="text-2xl mb-2">Ensolarado</span>
                        <AttributeDisplay label="Vento" value="NO 6.4km/h" />
                        <AttributeDisplay label="Umidade" value="78%" />
                        <AttributeDisplay label="Pressao" value="1003hPA" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default WeatherForecastItem;
