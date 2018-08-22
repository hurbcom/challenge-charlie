export default class PontosCardeaisComSubdivisoes {
    constructor() {}

    static transformaEmCardeias(graus) {
        let retorno = "";

        if (graus == 0) {
            retorno = "VAR";
        } else if (graus > 348.75 || graus < 11.25) retorno = "N";
        else if (graus > 11.25 && graus < 33.75) retorno = "NNE";
        else if (graus > 33.75 && graus < 56.25) retorno = "NE";
        else if (graus > 56.25 && graus < 78.75) retorno = "ENE";
        else if (graus > 78.75 && graus < 101.25) retorno = "E";
        else if (graus > 101.25 && graus < 123.75) retorno = "ESE";
        else if (graus > 123.75 && graus < 146.25) retorno = "SE";
        else if (graus > 146.25 && graus < 168.75) retorno = "SSE";
        else if (graus > 168.75 && graus < 191.25) retorno = "S";
        else if (graus > 191.25 && graus < 213.75) retorno = "SSW";
        else if (graus > 213.75 && graus < 236.25) retorno = "SW";
        else if (graus > 236.25 && graus < 258.75) retorno = "WSW";
        else if (graus > 258.75 && graus < 281.25) retorno = "W";
        else if (graus > 281.25 && graus < 303.75) retorno = "WNW";
        else if (graus > 303.75 && graus < 326.25) retorno = "NW";
        else if (graus > 326.25 && graus < 348.75) retorno = "NNW";
        else retorno = "N/A";

        return retorno;
    }
}
