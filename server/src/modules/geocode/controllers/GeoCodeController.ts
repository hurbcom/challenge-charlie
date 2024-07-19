import { Request, Response } from "express";
import GetPlaceName from "../services/GetPlaceName";

export default class GeoCodeController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { latitude, longitude } = request.query;
    const getPlaceName = new GetPlaceName();
    const placeName = await getPlaceName.execute({
      latitude: parseFloat(latitude as string),
      longitude: parseFloat(longitude as string),
    });
    return response.json(placeName);
  }
}
