import { GetCurrenciesControllerFactory } from '@challenge-charlie/backend/currency-exchange/framework/factories/controllers';
import * as express from 'express';

export abstract class GetCurrenciesRequestHandler {
  public static readonly URI = '/api/currencies';

  public static async execute(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    const getCurrenciesController = GetCurrenciesControllerFactory.execute();

    const { currencies } = await getCurrenciesController.execute();

    res.send({
      code: 200,
      status: 'sucesso',
      data: currencies,
    });
  }
}
