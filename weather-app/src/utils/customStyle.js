export const handleBackgroundColor = (temperature) => {
    switch (true) {
        case temperature < 15:
            return {
                currentColor: "rgba(0,0,139,0.6)",
                tomorrowColor: "rgba(135,206,235)",
                afterTomorrowColor: "rgba(0,0,205)",
            };
        case temperature > 35:
            return {
                currentColor: "rgba(128,0,0,0.6)",
                tomorrowColor: "rgba(255,99,71)",
                afterTomorrowColor: "rgba(139,0,0)",
            };
        default:
            return {
                currentColor: "rgba(255,215,0,0.6)",
                tomorrowColor: "rgba(255, 228, 116)",
                afterTomorrowColor: "rgba(208, 175, 18)",
            };
    }
};

export const handleIcon = (iconCode) => {
    switch (true) {
        case iconCode === "01":
            return "B"
        case iconCode === "02":
            return "H"
        case iconCode === "03":
            return "N"
        case iconCode === "04":
            return "Y"
        case iconCode === "09":
            return "R"
        case iconCode === "10":
            return "R"
        case iconCode === "11":
            return "O"
        case iconCode === "13":
            return "W"
        case iconCode === "50":
            return "M"
        default:
            return "A"
    }
}