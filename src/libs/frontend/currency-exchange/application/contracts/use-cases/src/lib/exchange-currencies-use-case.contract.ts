export type ExchangeCurrenciesUseCaseInput = {
    quotation: {
        currency: string,
        value: string
    },
    from: {
        currency: string
    },
    to: {
        currency: string
    },
    amount: string
}

export type ExchangeCurrenciesUseCaseOutput = {
    quotation: string
}

export type ExchangeCurrenciesUseCaseContract = {
    execute(input: ExchangeCurrenciesUseCaseInput): ExchangeCurrenciesUseCaseOutput
}
