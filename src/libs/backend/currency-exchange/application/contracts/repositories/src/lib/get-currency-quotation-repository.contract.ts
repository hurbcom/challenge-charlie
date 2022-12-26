export type GetCurrencyQuotationRepositoryInput = {
  isoCode: string;
};

export type GetCurrencyQuotationRepositoryOutput = {
  quotes: any[];
};

export type GetCurrencyQuotationRepositoryContract = {
  execute(input: GetCurrencyQuotationRepositoryInput): Promise<GetCurrencyQuotationRepositoryOutput>;
};
