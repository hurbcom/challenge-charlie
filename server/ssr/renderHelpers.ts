import { Writable } from "node:stream";
import { readFile } from "node:fs/promises";
import path from "node:path";

const isProd = process.env.NODE_ENV === "production";

export function getWritableStream(
    resolve: (value: string | PromiseLike<string>) => void,
    reject: (reason?: any) => void
) {
    let body = "";

    const writableStream = new Writable({
        write: (chunk, encoding, callback) => {
            body += chunk;
            // Send back to event loop, so renders are non-blocking
            setImmediate(callback);
        },
    });

    writableStream.on("finish", () => {
        return resolve(body);
    });

    writableStream.on("error", (error) => {
        return reject(error);
    });

    return writableStream;
}

let bootstrapScript: Record<string, string> | null = null;
export async function getBootstrapScript() {
    bootstrapScript =
        isProd && bootstrapScript
            ? bootstrapScript
            : JSON.parse(
                  await readFile(
                      path.resolve(
                          process.cwd(),
                          "build/public/webpack-stats.json"
                      ),
                      "utf-8"
                  )
              );
    return bootstrapScript;
}
