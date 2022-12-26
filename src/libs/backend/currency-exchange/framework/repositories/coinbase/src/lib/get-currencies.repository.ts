import { GetCurrenciesRepositoryContract, GetCurrenciesRepositoryOutput } from "@challenge-charlie/backend/currency-exchange/application/contracts/repositories";

export class GetCurrenciesRepository implements GetCurrenciesRepositoryContract {
  public async execute(): Promise<GetCurrenciesRepositoryOutput> {
    const response = await fetch('https://api.coinbase.com/v2/currencies');
    const { data } = await response.json();

    return {
      currencies: data.map((c: any) => ({
        name: c.name,
        isoCode: c.id,
      })),
    };
  }
}
