export type GetRandomMostTradedCurrencyIsoCodeUseCaseInput = {
    currentCurrencyIsoCode: string
}

export type GetRandomMostTradedCurrencyIsoCodeUseCaseOutput = {
    randomCurrencyIsoCode: string
}

export type GetRandomMostTradedCurrencyIsoCodeUseCaseContract = {
    execute(input: GetRandomMostTradedCurrencyIsoCodeUseCaseInput): GetRandomMostTradedCurrencyIsoCodeUseCaseOutput
}
