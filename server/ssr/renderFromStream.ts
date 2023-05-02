import { renderToPipeableStream } from "react-dom/server";
import { getBootstrapScript, getWritableStream } from "./renderHelpers";

async function renderFromStream(jsx: React.ReactElement): Promise<string> {
    const bootstrapScript = await getBootstrapScript();

    return new Promise((resolve, reject) => {
        const writableStream = getWritableStream(resolve, reject);

        if (bootstrapScript === null) {
            return reject("Cannot find bootstrapScripts path");
        }
        const { pipe } = renderToPipeableStream(jsx, {
            bootstrapScripts: [
                bootstrapScript["main.js"],
                bootstrapScript["runtime~main.js"],
            ],
            onAllReady() {
                pipe(writableStream);
            },
        });
    });
}

export default renderFromStream;
