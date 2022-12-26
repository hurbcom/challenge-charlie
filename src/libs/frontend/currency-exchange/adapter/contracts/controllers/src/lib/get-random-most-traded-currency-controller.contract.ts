export type GetRandomMostTradedCurrencyIsoCodeControllerInput = {
    currentCurrencyIsoCode: string
}

export type GetRandomMostTradedCurrencyIsoCodeControllerOutput = {
    randomCurrencyIsoCode: string
}

export type GetRandomMostTradedCurrencyIsoCodeControllerContract = {
    execute(input: GetRandomMostTradedCurrencyIsoCodeControllerInput): GetRandomMostTradedCurrencyIsoCodeControllerOutput
}
