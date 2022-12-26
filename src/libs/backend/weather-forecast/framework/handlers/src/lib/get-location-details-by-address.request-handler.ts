import * as express from 'express';
import { GetLocationOverviewByAddressControllerFactory } from '@challenge-charlie/backend/weather-forecast/framework/factories/controllers'

export abstract class GetLocationDetailsByAddressRequestHandler {
  public static readonly URI = '/api/location/details/address';

  public static async execute(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    const { address } = req.body;

    const controller = GetLocationOverviewByAddressControllerFactory.execute();

    const { location } = await controller.execute({
      address,
    });

    res.send({
      status: 'sucesso',
      code: 200,
      data: {
        currency: location.currency,
        address: location.address,
        weather: location.weatherForecast,
      },
    });
  }
}
