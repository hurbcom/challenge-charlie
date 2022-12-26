import * as express from 'express';
import { GetLocationOverviewByCoordinatesControllerFactory } from '@challenge-charlie/backend/weather-forecast/framework/factories/controllers'

export abstract class GetLocationDetailsByCoordinatesRequestHandler {
  public static readonly URI = '/api/location/details/coordinates';

  public static async execute(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    const { latitude, longitude } = req.body;

    const controller = GetLocationOverviewByCoordinatesControllerFactory.execute();

    const { location } = await controller.execute({
      latitude,
      longitude,
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
