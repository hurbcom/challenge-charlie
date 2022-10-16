const convertDegToDirection = (value: number | undefined) => {
    const windDirection = [
        "N",
        "NNE",
        "NE",
        "ENE",
        "E",
        "ESE",
        "SE",
        "SSE",
        "S",
        "SSW",
        "SW",
        "WSW",
        "W",
        "WNW",
        "NW",
        "NNW",
        "N"
    ];

    if(typeof(value)==="number") {
        const direction = Number((value/22.5).toFixed(0));
        return windDirection[direction];
    }
    return "?";
};

export default convertDegToDirection;