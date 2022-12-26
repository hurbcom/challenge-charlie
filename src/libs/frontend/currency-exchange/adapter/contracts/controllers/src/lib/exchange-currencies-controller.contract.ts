export type ExchangeCurrenciesControllerInput = {
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

export type ExchangeCurrenciesControllerOutput = {
    amountExchanged: string
}

export type ExchangeCurrenciesControllerContract = {
    execute(input: ExchangeCurrenciesControllerInput): ExchangeCurrenciesControllerOutput
}
