export type GetQuotationRepositoryInput = {
    from: string
    to: string
}

export type GetQuotationRepositoryOutput = {
    quotation: string
}

export type GetQuotationRepositoryContract = {
    execute(input: GetQuotationRepositoryInput): Promise<GetQuotationRepositoryOutput>
}