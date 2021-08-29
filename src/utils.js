//Define o ícone com base na descrição do clima
export const setIcon = (description) => {
    switch (description) {
        case "Thunderstorm":
            return "P";
        case "Rain":
            return "R";
        case "Snow":
            return "W";
        case "Clear":
            return "B";
        case "Clouds":
            return "Y";
        default:
            return "";
    }
};

//Define a direção do vento com base nos graus
export const setWindDirection = (deg) => {
    switch (deg && true) {
        case 0:
        case 360:
            return "N";
        case 90:
            return "L";
        case 180:
            return "S";
        case 270:
            return "O";
        case deg > 0 && deg < 90:
            return "NE";
        case deg > 90 && deg < 180:
            return "SE";
        case deg > 180 && deg < 270:
            return "SO";
        case deg > 270 && deg < 360:
            return "NO";
        default:
            return "";
    }
};

//Definine a cor de fundo do bloco de clima com base na temperatura
export const setWeatherBackground = (temp) => {
    switch (temp && true) {
        case temp <= 15:
            //azul
            return "rgba(0, 0, 224, .7) 0%, rgba(0, 0, 148, .7) 100%";
        case temp >= 35:
            //vermelho
            return "rgba(208, 0, 0, .7) 0%, rgba(150, 0, 0, .7) 100%";
        case temp > 15 && temp < 35:
            //amarelo
            return "rgba(255, 207, 0, .7) 0%, rgba(224, 185, 0, .7) 100%";
        default:
            //cinza
            return "rgba(40, 40, 40, .7) 0%, rgba(70, 70, 70, .7) 100%";
    }
};

//Converte temperatura de Celsius para Fahrenheit
export const convertCelsiusToFahrenheit = (temp) => {
    return Math.round(temp * 1.8 + 32);
};
