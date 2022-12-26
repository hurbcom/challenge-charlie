export type GetCurrencyQuotationControllerInput = {
  from: string;
  to: string;
};

export type GetCurrencyQuotationControllerOutput = {
  quotation: string;
};

export type GetCurrencyQuotationControllerContract = {
  execute(input: GetCurrencyQuotationControllerInput): Promise<GetCurrencyQuotationControllerOutput>;
};
