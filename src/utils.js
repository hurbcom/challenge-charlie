//Define o ícone com base na descrição do clima
export const setIcon = (description) => {
    switch (description) {
        case "chuva fraca":
            return "Q";
        case "céu pouco nublado":
            return "H";
        case "céu limpo":
        case "ensolarado":
            return "B";
        case "nuvens dispersas":
            return "S";
        case "nublado":
        case "nuvens quebradas":
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
            return "E";
        case 180:
            return "S";
        case 270:
            return "W";
        case deg > 0 && deg < 90:
            return "NE";
        case deg > 90 && deg < 180:
            return "SE";
        case deg > 180 && deg < 270:
            return "SW";
        case deg > 270 && deg < 360:
            return "NW";
        default:
            return "";
    }
};

//Definine a cor de fundo do bloco de clima com base na temperatura
export const setWeatherBackground = (temp) => {
    switch (temp && true) {
        case temp <= 15:
            //azul
            return "rgba(0, 0, 100, .9) 0%, rgba(0, 0, 150, .9) 100%";
        case temp >= 35:
            //vermelho
            return "rgba(100, 0, 0, .9) 0%, rgba(150, 0, 0, .9) 100%";
        case temp > 15 && temp < 35:
            //amarelo
            return "rgba(170, 140, 12, 0.9) 0%, rgba(190, 160, 18, 0.9) 100%";
        default:
            //cinza
            return "rgba(40, 40, 40, .9) 0%, rgba(70, 70, 70, 0.9) 100%";
    }
};

//Converte temperatura de Celsius para Fahrenheit
export const convertCelsiusToFahrenheit = (temp) => {
    return Math.round(temp * 1.8 + 32);
};
