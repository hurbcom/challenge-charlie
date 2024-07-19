import { Request, Response } from "express";
import GetBackgroundUrl from "../services/GetBackgroundUrl";

export default class BackgroundController {
  public async index(request: Request, response: Response): Promise<Response> {
    const getBackground = new GetBackgroundUrl();
    const background = await getBackground.execute();
    return response.json(background);
  }
}
