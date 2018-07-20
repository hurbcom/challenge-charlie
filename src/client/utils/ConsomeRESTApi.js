export default class ConsomeRESTApi {
    constructor() {}

    obtemApi(parametros) {
        let url = "";

        if (parametros != {}) {
            if (parametros.latitude !== undefined) {
                url += parametros.url;
                url += "/";
                url += parametros.latitude;
                url += "/";
                url += parametros.longitude;
                if (parametros.unidadeTemperatura !== undefined) {
                    url += parametros.unidadeTemperatura;
                }
            } else if (parametros.localidade !== undefined) {
                url += parametros.url;
                url += "/localidade/";
                url += parametros.localidade;
            } else {
                url = parametros.url;
            }
        }

        return fetch(url).then(resposta => resposta.json());
    }
}