import "whatwg-fetch";
import ConsomeRESTApi from "../src/client/utils/ConsomeRESTApi";

let consomeRESTApi = new ConsomeRESTApi();

let parametros = {};
parametros.localidade = "Rio de Janeiro";
parametros.url = "http://localhost:8080/yahoo";

let parametrosGeo = {};
parametrosGeo.latitude = "-22.9064";
parametrosGeo.longitude = "-43.1874";
parametrosGeo.url = "http://localhost:8080/yahoo";

it("Consome API Yahoo Weather, buscando pela localidade", async () => {
    let dadosLocalidade = [];

    const consomeAPI = () =>
        consomeRESTApi.obtemApi(parametros).then(consomeOsDados);

    const consomeOsDados = dados => {
        dadosLocalidade.push(dados.query.results.channel.location.city);
        dadosLocalidade.push(dados.query.results.channel.location.region);

        return dadosLocalidade[0];
    };

    const retornoAPI = await consomeAPI();

    expect(retornoAPI).toBe("Rio de Janeiro");
});

it("Consome API Yahoo Weather, buscando pela geolocalidade", async () => {
    let dadosLocalidade = [];

    const consomeAPI = () =>
        consomeRESTApi.obtemApi(parametrosGeo).then(consomeOsDados);

    const consomeOsDados = dados => {
        dadosLocalidade.push(dados.query.results.channel.location.city);
        dadosLocalidade.push(dados.query.results.channel.location.region);

        return dadosLocalidade[0];
    };

    const retornoAPI = await consomeAPI();

    expect(retornoAPI).toBe("Rio de Janeiro");
});
