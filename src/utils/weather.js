var directions = [
    "Norte",
    "Nordeste",
    "Leste",
    "Sudeste",
    "Sul",
    "Sudoeste",
    "Oeste",
    "Nordeste"
];

export const getDirection = heading => {
    const index = Math.round(heading / 8 / 5, 625);
    return directions[index] || "--";
};

export const getWeatherColor = temperature => {};

export const getWeatherIcon = weather => {
    const icons = {
        clear: require("../assets/icons/clear.svg"),
        clouds: require("../assets/icons/clouds.svg"),
        thunderstorm: require("../assets/icons/thunderstorm.svg"),
        snow: require("../assets/icons/snow.svg"),
        rain: require("../assets/icons/rain.svg"),
        drizzle: require("../assets/icons/drizzle.svg")
    };

    return weather === undefined ? "--" : icons[weather.toLowerCase()];
};

// export icons = ['clear', 'clouds', 'thunderstorm', 'snow', 'rain', 'drizzle'];
