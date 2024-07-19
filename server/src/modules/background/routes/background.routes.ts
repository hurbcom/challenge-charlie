import { Router } from "express";
import BackgroundController from "../controllers/BackgroundController";

const backgroundRouter = Router();
const backgroundController = new BackgroundController();

backgroundRouter.get("/", backgroundController.index);

export default backgroundRouter;
