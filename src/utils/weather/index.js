const celsiusToFahrenheit = (celsiusTemp) => {
    return (celsiusTemp * 9 / 5 + 32).toFixed(0)
}

const windDegreeToCompassDirection = degree => {
    /**
     * Convert wind degree unit to compass direction
     */
    const value = Number((degree / 22.5) + .5)
    const positions = [
        "N", "NNE", "NE", "ENE",
        "E", "ESE", "SE", "SSE",
        "S", "SSW", "SW", "WSW",
        "W", "WNW", "NW", "NNW"
    ]
    const index = Math.floor((value % 16))
    const position = positions[index]
    return position
}

const windSpeedMetersToKilometers = ms => (ms * 3.6).toFixed(2)
const windSpeedMetersToMiles = ms => (ms * 2.237).toFixed(2)

export {
    celsiusToFahrenheit,
    windDegreeToCompassDirection,
    windSpeedMetersToKilometers,
    windSpeedMetersToMiles
}