// Comeca Aqui ContainerImagemFundoActions
// Obtem a imagem de fundo de destaque do Bing
export const obtemImagemDoBing = dados => {
    return {
        type: "IMAGEM_FUNDO_BING",
        payload: dados
    };
};

// Obtem a Geolocalizacao pelo navegador
export const obtemLocalizacao = dados => {
    return {
        type: "OBTEM_LOCALIZACAO",
        payload: dados
    };
};
// Termina Aqui ContainerImagemFundoActions

// Comeca aqui o ContainerSubCardsActions
export const buscaPorLocalidade = dados => {
    return {
        type: "BUSCA_CONDICAO_TEMPO_GEO",
        payload: dados
    };
};

export const buscaPorCidade = dados => {
    return {
        type: "BUSCA_CONDICAO_TEMPO",
        payload: dados
    };
};

export const injetaLocalidade = localidade => {
    return {
        type: "ALTERA_LOCALIDADE",
        payload: localidade
    };
};

export const localidadeAlterada = valor => {
    return {
        type: "ALTERA_LOCALIDADE",
        payload: valor
    };
};

export const converteTemperatura = dadosTemperatura => {
    return {
        type: "TEMPERATURA_CONVERTIDA",
        payload: dadosTemperatura
    };
};
// Termina aqui o ContainerSubCardsActions

// Comeca aqui o SubCardTempoAtualActions
export const preparaIconeTempo = dados => {
    return {
        type: "PREPARA_ICONE_TEMPO_ATUAL",
        payload: dados
    };
};

export const preparaCondicaoTempo = dados => {
    return {
        type: "PREPARA_CONDICAO_TEMPO_ATUAL",
        payload: dados
    };
};

export const preparaTemperatura = (temperatura, unidadeTemperatura) => {
    return {
        type: "PREPARA_TEMPERATURA_TEMPO_ATUAL",
        payload: temperatura + "º " + unidadeTemperatura
    };
};

export const preparaVento = vento => {
    return {
        type: "PREPARA_VENTO_TEMPO_ATUAL",
        payload: vento
    };
};

export const preparaHumidade = humidade => {
    return {
        type: "PREPARA_HUMIDADE_TEMPO_ATUAL",
        payload: humidade
    };
};

export const preparaPressao = pressao => {
    return {
        type: "PREPARA_PRESSAO_TEMPO_ATUAL",
        payload: pressao
    };
};

export const preparaEstiloDeAcordoTemperatura = estilo => {
    return {
        type: "PREPARA_ESTILO_ACORDO_TEMPERATURA",
        payload: estilo
    };
};
// Termina aqui o SubCardTempoAtualActions
