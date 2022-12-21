export type GetCurrenciesRepositoryOutput = {
    currencies: []
}

export type GetCurrenciesRepositoryContract = {
    execute(): Promise<GetCurrenciesRepositoryOutput>
}