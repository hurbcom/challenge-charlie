export const getColorByTemperature = (temp) => {
    if (temp < 15) {
        return `0, 161, 255`;
    }
    if (temp > 35) {
        return `229, 98, 98`;
    }
    return `249, 204, 6`;
};
export const getWeatherIcon = (temp) => {
    switch (temp) {
        case "Rain":
            return "R";
        case "Snow":
        case "Sun":
            return "B";
        case "Clouds":
            return "Y";
        default:
            return "B";
    }
};
