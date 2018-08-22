import "whatwg-fetch";
import ConsomeRESTApi from "../src/client/utils/ConsomeRESTApi";

let parametros = {};
parametros.localidade = "Rio de Janeiro";
parametros.url = "http://localhost:8080/yahoo";

let parametrosGeo = {};
parametrosGeo.latitude = "-22.9064";
parametrosGeo.longitude = "-43.1874";
parametrosGeo.url = "http://localhost:8080/yahoo";

describe("Testa o consumo da API do Backend para busca no Yahoo Weather", () => {
    test("Consome API Yahoo Weather, buscando pela localidade", async () => {
        let dadosLocalidade = [];

        const consomeAPI = () =>
            ConsomeRESTApi.obtemApi(parametros).then(consomeOsDados);

        const consomeOsDados = dados => {
            dadosLocalidade.push(dados.query.results.channel.location.city);
            dadosLocalidade.push(dados.query.results.channel.location.region);

            return dadosLocalidade[0];
        };

        const retornoAPI = await consomeAPI();

        expect(retornoAPI).toBe("Rio de Janeiro");
    });

    test("Consome API Yahoo Weather, buscando pela geolocalidade", async () => {
        let dadosLocalidade = [];

        const consomeAPI = () =>
            ConsomeRESTApi.obtemApi(parametrosGeo).then(consomeOsDados);

        const consomeOsDados = dados => {
            dadosLocalidade.push(dados.query.results.channel.location.city);
            dadosLocalidade.push(dados.query.results.channel.location.region);

            return dadosLocalidade[0];
        };

        const retornoAPI = await consomeAPI();

        expect(retornoAPI).toBe("Rio de Janeiro");
    });
});
