import { POSITIONS_TO_OPACITIES, TEMPERATURE_COLORS } from "@constants/index";
//maybe this function doesn't need to be a hook and could be just an util. 
const useTemperatureColor = (temperature: number, position: number) => {
    const roundedTemp = Math.round(temperature);
    if (roundedTemp === 0) {
        return `rgba(${TEMPERATURE_COLORS['grey']}, var(${POSITIONS_TO_OPACITIES[position]}))`;
    }
    // I'll stick with the browser default "yellow", "red", and "blue" colors given that the specs don't mention a specific color.
    if (roundedTemp <= 15) {
        return `rgba(${TEMPERATURE_COLORS['blue']}, var(${POSITIONS_TO_OPACITIES[position]}))`;
    }

    if (roundedTemp >= 35) {
        return `rgba(${TEMPERATURE_COLORS['red']}, var(${POSITIONS_TO_OPACITIES[position]}))`;
    }

    return `rgba(${TEMPERATURE_COLORS['yellow']}, var(${POSITIONS_TO_OPACITIES[position]}))`;
};

export default useTemperatureColor;