const INITIAL_STATE = {
    latitude: "",
    longitude: "",
    imagemFundoUrl: "",
    cidade: "",
    regiao: "",
    localidade: "",
    temperaturaHoje: "",
    unidadeTemperatura: "",
    condicaoTempoHoje: "",
    temperaturaAmanha: "",
    condicaoTempoAmanha: "",
    temperaturaDepoisAmanha: "",
    condicaoTempoDepoisAmanha: "",
    ventoVelocidade: "",
    ventoDirecao: "",
    ventoUnidade: "",
    humidade: "",
    pressao: "",
    condicaoTempoView: "",
    iconeTempoHojeView: "",
    iconeTempoAmanhaView: "",
    iconeTempoDepoisAmanhaView: "",
    temperaturaView: "",
    ventoView: "",
    humidadeView: "",
    pressaoView: "",
    estiloTemperaturaHoje: "cinza_primario",
    estiloTemperaturaAmanha: "cinza_secundario",
    estiloTemperaturaDepoisAmanha: "cinza_terceario",
    estilosTemperaturaHoje: [
        "vermelho_primario",
        "azul_primario",
        "amarelo_primario",
        "cinza_primario"
    ],
    estilosTemperaturaAmanha: [
        "vermelho_secundario",
        "azul_secundario",
        "amarelo_secundario",
        "cinza_secundario"
    ],
    estilosTemperaturaDepoisAmanha: [
        "vermelho_terceario",
        "azul_terceario",
        "amarelo_terceario",
        "cinza_terceario"
    ]
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "IMAGEM_FUNDO_BING":
            return {
                ...state,
                imagemFundoUrl:
                    "https://bing.com.br" + action.payload.images[0].url
            };
        case "OBTEM_LOCALIZACAO":
            return {
                ...state,
                latitude: action.payload.latitude,
                longitude: action.payload.longitude
            };

        case "BUSCA_CONDICAO_TEMPO_GEO":
            // Não conseguiu dados meteorologicos da localidade
            // limpa os dados da tela, e deixa a cor de fundo
            // dos cards em tons de cinza
            if (
                action.payload.query.results == null ||
                action.payload.query.results.channel.location === undefined
            ) {
                // console.log("Zerando o Estado");
                return {
                    ...state,
                    latitude: "",
                    longitude: "",
                    cidade: "",
                    regiao: "",
                    localidade: "",
                    temperaturaHoje: "",
                    unidadeTemperatura: "",
                    temperaturaAmanha: "",
                    condicaoTempoAmanha: "",
                    temperaturaDepoisAmanha: "",
                    condicaoTempoDepoisAmanha: "",
                    condicaoTempoHoje: "",
                    ventoVelocidade: "",
                    ventoDirecao: "",
                    ventoUnidade: "",
                    humidade: "",
                    pressao: "",
                    iconeTempoHojeView: "",
                    iconeTempoAmanhaView: "",
                    iconeTempoDepoisAmanhaView: "",
                    condicaoTempoView: "",
                    iconeTempoView: "",
                    temperaturaView: "",
                    ventoView: "",
                    humidadeView: "",
                    pressaoView: "",
                    estiloTemperaturaHoje: "cinza_primario",
                    estiloTemperaturaAmanha: "cinza_secundario",
                    estiloTemperaturaDepoisAmanha: "cinza_terceario"
                };
            } else {
                // console.log("BUSCA_CONDICAO_TEMPO_GEO Atribuindo o Estado");
                // console.log("action.payload", action.payload);
                return {
                    ...state,
                    cidade: action.payload.query.results.channel.location.city,
                    regiao:
                        action.payload.query.results.channel.location.region,
                    temperaturaHoje:
                        action.payload.query.results.channel.item.condition
                            .temp,
                    unidadeTemperatura:
                        action.payload.query.results.channel.units.temperature,
                    temperaturaAmanha:
                        action.payload.query.results.channel.item.forecast[1]
                            .high,
                    condicaoTempoAmanha:
                        action.payload.query.results.channel.item.forecast[1]
                            .code,
                    temperaturaDepoisAmanha:
                        action.payload.query.results.channel.item.forecast[2]
                            .high,
                    condicaoTempoDepoisAmanha:
                        action.payload.query.results.channel.item.forecast[2]
                            .code,
                    condicaoTempoHoje:
                        action.payload.query.results.channel.item.condition
                            .code,
                    ventoVelocidade:
                        action.payload.query.results.channel.wind.speed,
                    ventoDirecao:
                        action.payload.query.results.channel.wind.direction,
                    ventoUnidade: "Km/h",
                    humidade:
                        action.payload.query.results.channel.atmosphere
                            .humidity,
                    pressao:
                        action.payload.query.results.channel.atmosphere.pressure
                };
            }
        case "BUSCA_CONDICAO_TEMPO":
            // Não conseguiu dados meteorologicos da localidade
            // limpa os dados da tela, e deixa a cor de fundo
            // dos cards em tons de cinza
            if (
                action.payload.query.results == null ||
                action.payload.query.results.channel.location === undefined
            ) {
                // console.log("Zerando o Estado");
                return {
                    ...state,
                    latitude: "",
                    longitude: "",
                    cidade: "",
                    regiao: "",
                    localidade: "",
                    temperaturaHoje: "",
                    unidadeTemperatura: "",
                    temperaturaAmanha: "",
                    condicaoTempoAmanha: "",
                    temperaturaDepoisAmanha: "",
                    condicaoTempoDepoisAmanha: "",
                    condicaoTempoHoje: "",
                    ventoVelocidade: "",
                    ventoDirecao: "",
                    ventoUnidade: "",
                    humidade: "",
                    pressao: "",
                    iconeTempoHojeView: "",
                    iconeTempoAmanhaView: "",
                    iconeTempoDepoisAmanhaView: "",
                    condicaoTempoView: "",
                    iconeTempoView: "",
                    temperaturaView: "",
                    ventoView: "",
                    humidadeView: "",
                    pressaoView: "",
                    estiloTemperaturaHoje: "cinza_primario",
                    estiloTemperaturaAmanha: "cinza_secundario",
                    estiloTemperaturaDepoisAmanha: "cinza_terceario"
                };
            } else {
                return {
                    ...state,
                    latitude: action.payload.query.results.channel.item.lat,
                    longitude: action.payload.query.results.channel.item.long,
                    cidade: action.payload.query.results.channel.location.city,
                    regiao:
                        action.payload.query.results.channel.location.region,
                    temperaturaHoje:
                        action.payload.query.results.channel.item.condition
                            .temp,
                    unidadeTemperatura:
                        action.payload.query.results.channel.units.temperature,
                    temperaturaAmanha:
                        action.payload.query.results.channel.item.forecast[1]
                            .high,
                    condicaoTempoAmanha:
                        action.payload.query.results.channel.item.forecast[1]
                            .code,
                    temperaturaDepoisAmanha:
                        action.payload.query.results.channel.item.forecast[2]
                            .high,
                    condicaoTempoDepoisAmanha:
                        action.payload.query.results.channel.item.forecast[2]
                            .code,
                    condicaoTempoHoje:
                        action.payload.query.results.channel.item.condition
                            .code,
                    ventoVelocidade:
                        action.payload.query.results.channel.wind.speed,
                    ventoDirecao:
                        action.payload.query.results.channel.wind.direction,
                    ventoUnidade: "Km/h",
                    humidade:
                        action.payload.query.results.channel.atmosphere
                            .humidity,
                    pressao:
                        action.payload.query.results.channel.atmosphere.pressure
                };
            }
        case "IMAGEM_FUNDO_BING":
            return {
                ...state,
                imagemFundoUrl:
                    "https://bing.com.br" + action.payload.images[0].url
            };
        case "OBTEM_LOCALIZACAO":
            return {
                ...state,
                latitude: action.payload.latitude,
                longitude: action.payload.longitude
            };
        case "TEMPERATURA_CONVERTIDA":
            return {
                ...state,
                temperaturaHoje: action.payload.temperaturaHoje,
                unidadeTemperatura: action.payload.unidadeTemperatura,
                temperaturaAmanha: action.payload.temperaturaAmanha,
                temperaturaDepoisAmanha: action.payload.temperaturaDepoisAmanha
            };
        case "ALTERA_LOCALIDADE":
            return {
                ...state,
                localidade: action.payload
            };
        case "PREPARA_ICONE_TEMPO_ATUAL":
            return {
                ...state,
                ...action.payload
            };
        case "PREPARA_CONDICAO_TEMPO_ATUAL":
            return {
                ...state,
                condicaoTempoView: action.payload.condicaoTempoView
            };
        case "PREPARA_TEMPERATURA_TEMPO_ATUAL":
            return {
                ...state,
                temperaturaView: action.payload
            };
        case "PREPARA_VENTO_TEMPO_ATUAL":
            return {
                ...state,
                ventoView: action.payload
            };
        case "PREPARA_HUMIDADE_TEMPO_ATUAL":
            return {
                ...state,
                humidadeView: action.payload
            };
        case "PREPARA_PRESSAO_TEMPO_ATUAL":
            return {
                ...state,
                pressaoView: action.payload
            };
        case "PREPARA_ESTILO_ACORDO_TEMPERATURA":
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}
