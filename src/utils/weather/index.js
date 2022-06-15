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

const selectWeatherColor = (temp, lvl, defaultColor = false) => {


    const tempToNumber = Number(temp)
    const colorLevel = lvl || 'hd'
    const colors = {
        lt: {
            cold: ({ backgroundColor: "rgba(32, 63, 120, 0.2)" }),
            nice: ({ backgroundColor: "rgba(245, 203, 14, 0.39)" }),
            hot: ({ backgroundColor: "rgba(158, 26, 26, 0.516)" }),
            default: ({ backgroundColor: "rgba(81, 80, 79, 0.473)" }),
        },
        md: {
            cold: ({ backgroundColor: "rgba(7, 36, 90, 0.495)" }),
            nice: ({ backgroundColor: "rgba(188, 153, 26, 0.490)" }),
            hot: ({ backgroundColor: "rgba(90, 24, 8, 0.577)" }),
            default: ({ backgroundColor: "rgba(81, 80, 79, 0.632)" })
        },
        hd: {
            cold: ({ backgroundColor: "rgba(4, 19, 48, 0.719)" }),
            nice: ({ backgroundColor: "rgba(92, 77, 23, 0.725)" }),
            hot: ({ backgroundColor: "rgba(78, 27, 14, 0.758)" }),
            default: ({ backgroundColor: "rgba(49, 49, 49, 0.79)" })
        }

    }

    if (defaultColor) {
        return colors[colorLevel]['default']
    }

    if (tempToNumber < 15) {
        return colors[colorLevel]['cold']
    } else if (tempToNumber > 35) {
        return colors[colorLevel]['hot']
    } else {
        return colors[colorLevel]['nice']
    }
}

export {
    celsiusToFahrenheit,
    windDegreeToCompassDirection,
    windSpeedMetersToKilometers,
    windSpeedMetersToMiles,
    selectWeatherColor
}