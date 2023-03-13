import React from "react";

const WEATHER_ICONS = {
    Thunderstorm: "",
    Drizzle: "",
    Rain: "",
    Snow: "",
    Mist: "",
    Clear: "",
    Clouds: "",
    Smoke,
    Haze,
    Dust,
    Fog,
    Sand,
    Ash,
    Squail,
    Tornado,
};

const WeatherIcon = ({ main, width, height }) => {
    const Icon = WEATHER_ICONS[main];

    return (
        <div className="relative w-full h-full">
            <Icon />
        </div>
    );
    // return (
    //     <div className="relative w-full h-full">
    //         <Svg
    //             style={{
    //                 height: "100%",
    //                 width: "100%",
    //                 position: "absolute",
    //                 top: 0,
    //                 left: 0,
    //             }}
    //             preserveAspectRatio="xMidYMid meet"
    //         />
    //     </div>
    // );
};

export default WeatherIcon;
