const https = require("https");

let yahooApi = {};
let url = "";

yahooApi.montaUrl = function(parametrosRequisicao) {
    let urlBase = "https://query.yahooapis.com/v1/public/yql";
    let latitude = "";
    let longitude = "";
    let unidadeTemperatura = "f";
    let formatoResposta = "&format=json";

    if (
        parametrosRequisicao.latitude !== "" &&
        parametrosRequisicao.latitude !== undefined
    ) {
        latitude = parametrosRequisicao.latitude;
        longitude = parametrosRequisicao.longitude;
        let consulta =
            '?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="(';
        consulta += latitude;
        consulta += ",";
        consulta += longitude;
        consulta += ')")';
        consulta += 'and u="';
        if (
            parametrosRequisicao.unidadeTemperatura !== "" &&
            parametrosRequisicao.unidadeTemperatura !== undefined
        ) {
            consulta += parametrosRequisicao.unidadeTemperatura + '"';
        } else {
            consulta += unidadeTemperatura + '"';
        }
        consulta += formatoResposta;
        url = urlBase + consulta;
    } else if (
        parametrosRequisicao.localidade !== "" &&
        parametrosRequisicao.localidade !== undefined
    ) {
        let localidade = parametrosRequisicao.localidade;
        let parametros =
            '?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="';
        parametros += encodeURI(localidade);
        parametros += '")';
        parametros += 'and u="';
        parametros += unidadeTemperatura + '"';
        parametros += formatoResposta;

        url = urlBase + parametros;
    }
};

yahooApi.obtemDadosMeteorologicos = function(request, response) {
    yahooApi.montaUrl(request.params);

    let resposta = "";

    let req = https.get(url, resp => {
        resp.on("data", data => {
            resposta += data;
        });
        resp.on("end", data => {
            response.json(JSON.parse(resposta));
        });
    });

    req.on("error", data => {
        console.dir(data);
        response.json(resposta);
    });
};

module.exports = yahooApi;
