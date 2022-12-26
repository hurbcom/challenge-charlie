export type GetCurrenciesControllerOutput = {
  currencies: any[];
};

export type GetCurrenciesControllerContract = {
  execute(): Promise<GetCurrenciesControllerOutput>;
};
