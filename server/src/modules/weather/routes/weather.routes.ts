import { Router } from "express";
import WeatherController from "../controllers/WeatherController";

const weatherRouter = Router();
const weatherController = new WeatherController();

weatherRouter.get("/", weatherController.index);

export default weatherRouter;
