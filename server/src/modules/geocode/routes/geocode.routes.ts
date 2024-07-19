import { Router } from "express";
import GeoCodeController from "../controllers/GeoCodeController";

const geocodeRouter = Router();
const geocodeController = new GeoCodeController();

geocodeRouter.get("/", geocodeController.index);

export default geocodeRouter;
