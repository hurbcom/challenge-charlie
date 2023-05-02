import express from "express";
import path from "path";
import renderReact from "./ssr/renderReact";
import { devMiddleware, hotMiddleware } from "../webpack.config";
import { getBackgroundImageData } from "./services/bg-image.service";
import getLocationData from "./services/getLocationData.service";
import getForecastData from "./services/getForecastData.service";

const isDevMode = process.env.NODE_ENV === "development";

declare global {
    interface Window {
        isServer: any;
    }
}
// Must create a mock window object for components that might need it
global.window = {} as Window & typeof globalThis;

global.window.isServer = true;

const app = express();
const cwd = process.cwd();

if (isDevMode) {
    app.use(devMiddleware);
    app.use(hotMiddleware);
}

app.use(express.static(path.resolve(cwd, "build/public"), { index: false }));
app.use("/favicon.ico", express.static(path.resolve(cwd, "favicon.ico")));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/get-image", async function (req: Req, res: Res) {
    try {
        const data = await getBackgroundImageData();
        res.send(data);
    } catch (error) {
        console.error(error);
        res.send({ url: "" });
    }
});

app.get("/get-location", async function (req: Req, res: Res) {
    try {
        const latitude = req.query.latitude;
        const longitude = req.query.longitude;
        if (
            !latitude ||
            !longitude ||
            typeof latitude !== "string" ||
            typeof longitude !== "string"
        ) {
            throw new Error("Invalid coordinates");
        }

        const data = await getLocationData(latitude, longitude);

        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(400).send({ message: error });
    }
});

app.get("/get-forecast", async function (req: Req, res: Res) {
    try {
        const location = req.query.q;
        if (!location || typeof location !== "string") {
            throw new Error("Invalid location");
        }

        const data = await getForecastData(location);

        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(400).send({ message: error });
    }
});

app.get("/*", renderReact);

// 404 not found
app.use((req: Req, res: Res) => {
    return res.send("errors/404");
});

// unhandled error handling
app.use((err: any, req: Req, res: Res, next: Next) => {
    console.error(err);
    return res.json(err);
});

export default app;
