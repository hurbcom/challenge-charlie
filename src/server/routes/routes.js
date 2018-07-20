const bingApi = require("../services/bingApi");
const yahooApi = require("../services/yahooApi");

let routes = {};
let server;

routes.configuraRotas = function(express) {
    server = express;
    routes.apiBing();
    routes.apiYahoo();
    routes.apiYahooLocalidade();
    routes.apiYahooGeoLocalidade();
    routes.apiYahooGeoLocalidadeTemperatura();
};

routes.apiBing = function() {
    server.route("/bing").get(bingApi.obtemFoto);
};

routes.apiYahoo = function() {
    server.route("/yahoo").get(yahooApi.obtemDadosMeteorologicos);
};

routes.apiYahooLocalidade = function() {
    server
        .route("/yahoo/localidade/:localidade")
        .get(yahooApi.obtemDadosMeteorologicos);
};

routes.apiYahooGeoLocalidade = function() {
    server
        .route("/yahoo/:latitude/:longitude")
        .get(yahooApi.obtemDadosMeteorologicos);
};

routes.apiYahooGeoLocalidadeTemperatura = function() {
    server
        .route("/yahoo/:latitude/:longitude/:unidadeTemperatura")
        .get(yahooApi.obtemDadosMeteorologicos);
};

module.exports = routes;
