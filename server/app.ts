import express from "express";
import path from "path";
import renderReact from "./ssr/renderReact";
import { devMiddleware, hotMiddleware } from "../webpack.config";
import { getBackgroundImageURL } from "../shared/services/bg-image.service";

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
app.use(express.urlencoded());

app.get("/get-image", async function (req: Req, res: Res) {
    try {
        res.send({ url: await getBackgroundImageURL() });
    } catch (error) {
        console.error(error);
        return { url: "" };
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
