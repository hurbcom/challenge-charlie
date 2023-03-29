import express from "express";

import { renderToPipeableStream } from "react-dom/server";

import App from "@/pages/_app";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
    const stream = renderToPipeableStream(App());
    res.set("Content-Type", "text/html");
    stream.pipe(res);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
