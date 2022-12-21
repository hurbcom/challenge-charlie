export type GetQuotationControllerInput = {
    from: string
    to: string
}

export type GetQuotationControllerOutput = {
    quotation: string
}

export type GetQuotationControllerContract = {
    execute(input: GetQuotationControllerInput): Promise<GetQuotationControllerOutput>
}
