import { GetCurrenciesRepositoryContract, GetCurrenciesRepositoryOutput } from "@challenge-charlie/frontend/currency-exchange/application/contracts/repositories";
import { environment } from "../environments/environment";


export class GetCurrenciesRepository implements GetCurrenciesRepositoryContract {
    public async execute(): Promise<GetCurrenciesRepositoryOutput> {

        const response = await fetch(`${environment.bffs.currencyExchange.baseUrl}${environment.bffs.currencyExchange.endpoints.getCurrencies}`);

        const { data } = await response.json()

        return {
            currencies: data,
        }

    }
}
