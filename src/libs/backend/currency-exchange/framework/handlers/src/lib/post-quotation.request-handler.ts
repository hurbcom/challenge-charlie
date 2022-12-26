import { GetCurrencyQuotationControllerFactory } from '@challenge-charlie/backend/currency-exchange/framework/factories/controllers';
import * as express from 'express';

export abstract class PostQuotationRequestHandler {
  public static readonly URI = '/api/quotation';

  public static async execute(req: express.Request, res: express.Response): Promise<void> {
    const getCurrencyQuotationController = GetCurrencyQuotationControllerFactory.execute();

    const { from, to } = req.body;

    const { quotation } = await getCurrencyQuotationController.execute({
      from,
      to
    });

    res.send({
      code: 200,
      status: 'sucesso',
      data: quotation,
    });
  }
}
