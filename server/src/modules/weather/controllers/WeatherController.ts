import axios from "axios";
import { Request, Response } from "express";
import GetWeather from "../services/GetWeather";

export default class WeatherController {
  public async index(
    request: Request,
    response: Response
  ): Promise<Response | undefined> {
    const { unit, query } = request.query;
    const getWeather = new GetWeather();

    try {
      const weather = await getWeather.execute({
        units: unit as "metric" | "imperial",
        query: query as string,
      });
      return response.json(weather);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.response)
          return response
            .status(error.response.status)
            .json(error.response.data);
      } else if (error instanceof Error) {
        console.error(error.message);
        return response.status(500).json(error.message);
      } else {
        console.error(error);
        return response.status(500).json(error);
      }
    }
  }
}
