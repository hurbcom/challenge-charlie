import { GetBackgroundImageURLControllerFactory } from '@challenge-charlie/backend/utility/framework/factories/controllers';
import * as express from 'express';

export abstract class GetBackgroundImageURLRequestHandler {
    public static readonly URI = '/api/background';

    public static async execute(
        req: express.Request,
        res: express.Response
    ): Promise<void> {
        const controller = GetBackgroundImageURLControllerFactory.execute();

        const { url } = await controller.execute();

        res.status(200).send({
            data: url,
        });
    }
}
