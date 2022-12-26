export type GetColorByTemperatureUseCaseInput = {
    temperature: number
}

export type GetColorByTemperatureUseCaseOutput = {
    color: string
}

export type GetColorByTemperatureUseCaseContract = {
    execute(input: GetColorByTemperatureUseCaseInput): GetColorByTemperatureUseCaseOutput
}
