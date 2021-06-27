export default function weatherIcons(description) {
    if (description === "chuva fraca" || description === "chuva leve") {
        return "Q";
    }

    if (description === "chuva moderada") {
        return "R";
    }

    if (description === "nuvens quebradas" || description === "nublado" || description === "algumas nuvens") {
        return "Y";
    }

    if (description === "nuvens dispersas") {
        return "S";
    }

    if (description === "céu pouco nublado") {
        return "H";
    }

    if (description === "céu limpo" || description === "ensolarado") {
        return "B";
    }

    if (description === "pouca neve") {
        return "U";
    }
}