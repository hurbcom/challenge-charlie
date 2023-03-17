export const getForecastBgColor = (temp) => {
    let color = "yellow";
    if (temp > 35) {
        color = "red";
    }
    if (temp < 15) {
        color = "blue";
    }
    return color
}

export const colorOptions = {
    blue: [
        "rgba(96, 165, 250, 0.8)",
        "rgba(59, 130, 246, 0.9)",
        "rgba(37, 99, 235, 1)",
    ],
    red: [
        "rgba(239, 68, 68, 0.8)",
        "rgba(220, 38, 38, 0.9)",
        "rgba(185, 28, 28, 1)",
    ],
    yellow: [
        "rgba(250, 204, 21, 0.8)",
        "rgba(234, 179, 8, 0.9)",
        "rgba(202, 138, 4, 1)",
    ],
    gray: [
        "rgba(107, 114, 128, 0.8)",
        "rgba(85, 95, 109, 0.9)",
        "rgba(75, 85, 99, 1)",
    ]
};