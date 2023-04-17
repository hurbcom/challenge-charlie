import { useState } from "react";

//for celsius and fahrenheit
type AcceptedScales = "C" | "F";

const calculateTemperature = (temperature: number, scale = "C"): number => {
    switch (scale) {
        case "F":
            return Math.round(temperature * 1.8 + 32);
        default:
            return Math.round(temperature);
    }
};

const useScaleToggle = (temperature: number) => {
    const [scale, setScale] = useState<AcceptedScales>("C");

    const changeScale = () => {
        setScale(scale === "C" ? "F" : "C");
    };

    return {
        scaledTemperature: `${calculateTemperature(
            temperature,
            scale
        )}°${scale}`,
        changeScale,
    };
};

export default useScaleToggle;
