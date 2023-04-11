import React from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import renderFromStream from "./renderFromStream";

async function renderReact(
    req: Req,
    res: Res,
    next: Next
): Promise<Res | void> {
    try {
        const { default: App } = await import("../../react/App");
        // Style sheet object to contain all styles generated from styled components
        const styleSheet = new ServerStyleSheet();
        // Must create a mock window object for components that might need it
        global.window = {} as Window & typeof globalThis;

        // SSR render the full App
        const jsx = (
            <StyleSheetManager sheet={styleSheet.instance}>
                <App />
            </StyleSheetManager>
        );

        const appHtml = await renderFromStream(jsx);
        const responseHtml = `
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;1,400&display=swap"
            rel="stylesheet"
        />
        <title>Weather App</title>
        ${styleSheet.getStyleTags()}
    </head>
    <body>
        <div id="react-app">${appHtml}</div>
    </body>
</html>`;

        styleSheet.seal();
        return res.send(responseHtml);
    } catch (err) {
        return next(err);
    }
}

export default renderReact;
