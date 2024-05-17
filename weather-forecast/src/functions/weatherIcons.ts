export const weatherIcons = (description: string) => {
    switch (description) {
        case "clear sky":
            return "2";
        case "few clouds":
            return "12";
        case "scattered clouds":
            return "19";
        case "broken clouds":
            return "14";
        case "light intensity drizzle" || "rain" || "shower rain":
            return "18";
        case "thunderstorm":
            return "16";
        case "snow":
            return "23";
        case "mist":
            return "13";
        case "light rain":
            return "17";
        case "overcast clouds":
            return "41";
        default:
            return "45";
    }
};
