export type GetCurrenciesControllerOutput = {
    currencies: []
}

export type GetCurrenciesControllerContract = {
    execute(): Promise<GetCurrenciesControllerOutput>
}
