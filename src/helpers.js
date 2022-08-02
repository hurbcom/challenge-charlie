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
            return "W";

        case "Clouds":
            return "Y";
        case "Sun":
        default:
            return "B";
    }
};
export const getWindDirection = (windDeg) => {
    if ((windDeg > 0 && windDeg < 45) || windDeg > 350) {
        return "N";
    }
    if (windDeg >= 45 && windDeg < 90) {
        return "NE";
    }
    if (windDeg >= 90 && windDeg < 135) {
        return "E";
    }
    if (windDeg >= 135 && windDeg < 180) {
        return "SE";
    }
    if (windDeg >= 180 && windDeg < 225) {
        return "S";
    }
    if (windDeg >= 225 && windDeg < 270) {
        return "SO";
    }
    if (windDeg >= 270 && windDeg < 315) {
        return "O";
    }
    if (windDeg >= 315 && windDeg < 350) {
        return "NO";
    }
};
