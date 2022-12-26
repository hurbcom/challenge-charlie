export type GetCurrencyQuotationUseCaseInput = {
  from: string;
  to: string;
};
export type GetCurrencyQuotationUseCaseOutput = {
  quotation: string;
};
export type GetCurrencyQuotationUseCaseContract = {
  execute(input: GetCurrencyQuotationUseCaseInput): Promise<GetCurrencyQuotationUseCaseOutput>;
};
