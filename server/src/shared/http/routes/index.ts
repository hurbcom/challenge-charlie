import backgroundRouter from "@modules/background/routes/background.routes";
import geocodeRouter from "@modules/geocode/routes/geocode.routes";
import weatherRouter from "@modules/weather/routes/weather.routes";
import { Router } from "express";

const routes = Router();

routes.use("/background", backgroundRouter);
routes.use("/geocode", geocodeRouter);
routes.use("/weather", weatherRouter);

export default routes;
