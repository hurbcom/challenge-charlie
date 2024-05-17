export const weatherDescriptions = (description: string) => {
    switch (description) {
        case "clear sky":
            return "Céu limpo";
        case "few clouds":
            return "Poucas nuvens";
        case "scattered clouds":
            return "Nuvens dispersas";
        case "broken clouds":
            return "Nuvens quebradas";
        case "light intensity drizzle" || "rain" || "shower rain":
            return "Chuva";
        case "thunderstorm":
            return "Trovoada";
        case "snow":
            return "Neve";
        case "mist":
            return "Névoa";
        case "light rain":
            return "Chuva leve";
        case "overcast clouds":
            return "Nuvens nubladas";
        default:
            return description;
    }
};
