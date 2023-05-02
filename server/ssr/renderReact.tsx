import React from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import renderFromStream from "./renderFromStream";
import ssrPrepass from "react-ssr-prepass";
import {
    dehydrate,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";

async function renderReact(
    _req: Req,
    res: Res,
    next: Next
): Promise<Res | void> {
    try {
        const queryClient = new QueryClient();
        const { default: App } = await import("../../react/App");
        // Style sheet object to contain all styles generated from styled components
        const styleSheet = new ServerStyleSheet();

        await ssrPrepass(<App />);

        // SSR render the full App
        const jsx = (
            <StyleSheetManager sheet={styleSheet.instance}>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </StyleSheetManager>
        );

        // To use streaming render, uncomment next line
        const appHtml = await renderFromStream(jsx);

        const dehydratedState = dehydrate(queryClient);

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
        <script>
            window.__REACT_QUERY_STATE__ = ${JSON.stringify(dehydratedState)};
        </script>
    </body>
</html>`;

        styleSheet.seal();
        return res.send(responseHtml);
    } catch (err) {
        return next(err);
    }
}

export default renderReact;
