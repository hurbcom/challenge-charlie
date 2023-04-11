import path from "node:path";
import { readFileSync } from "node:fs";
import webpack from "webpack";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { WebpackManifestPlugin } from "webpack-manifest-plugin";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "@gatsbyjs/webpack-hot-middleware";
import type { Request, Response, NextFunction } from "express";
import CopyPlugin from "copy-webpack-plugin";

const swcConfig = JSON.parse(
    readFileSync(path.resolve(process.cwd(), "swc.config.json"), "utf-8")
);

const isDevMode = process.env.NODE_ENV === "development";

const webpackSwcConfig = {
    ...swcConfig,
    jsc: {
        ...swcConfig.jsc,
        transform: {
            react: {
                runtime: "automatic",
                // Enable fast refresh in dev
                refresh: isDevMode,
            },
        },
    },
    module: {
        // Set module type to get code splitting.
        // Code splitting does not work for type: "commonjs".
        type: "nodenext",
    },
};

const contenthash = isDevMode ? "" : ".[contenthash:8]";

const webpackConfig: webpack.Configuration = {
    mode: isDevMode ? "development" : "production",
    entry: {
        main: ["./react/index.tsx"],
    },
    output: {
        clean: true,
        path: path.resolve(__dirname, "./build/public"),
        filename: `[name]${contenthash}.js`,
        chunkFilename: `[name].chunk${contenthash}.js`,
        publicPath: "/",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                include: [path.join(__dirname, "react")], // only bundle files in this directory
                use: {
                    loader: "swc-loader",
                    options: webpackSwcConfig,
                },
            },
        ],
    },
    plugins: [
        new WebpackManifestPlugin({
            fileName: "webpack-stats.json",
            writeToFileEmit: true,
            isInitial: true,
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "static/**/*",
                    to: "",
                },
            ],
        }),
    ],
    optimization: {
        moduleIds: "deterministic", // Now, despite any new local dependencies, our vendor hash should stay consistent between builds
        runtimeChunk: true, // see https://webpack.js.org/guides/build-performance/#minimal-entry-chunk
    },
};

if (isDevMode) {
    webpackConfig.entry = {
        main: ["@gatsbyjs/webpack-hot-middleware/client", "./react/index.tsx"],
    };

    webpackConfig.output = {
        ...webpackConfig.output,
        hotUpdateChunkFilename: "[id].hot-update.js",
        hotUpdateMainFilename: "[runtime].hot-update.json",
    };

    webpackConfig.plugins = [
        ...(webpackConfig.plugins || []),
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin({
            overlay: {
                sockIntegration: "whm",
            },
        }),
    ];

    webpackConfig.cache = {
        // https://webpack.js.org/configuration/other-options/#cache
        type: "filesystem",
        cacheDirectory: path.resolve(__dirname, ".tmp"),
        name: "dev-react-cache",
    };
}

const compiler = webpack(webpackConfig);

if (isDevMode) {
    const dirName = path.resolve(__dirname, "./react/");

    compiler.hooks.afterEmit.tap("cleanup-the-require-cache", () => {
        // After webpack rebuild, clear the files from the require cache,
        // so that next server side render will be in sync
        Object.keys(require.cache)
            .filter((key) => key.includes(dirName))
            .forEach((key) => delete require.cache[key]);
    });
}

export const devMiddleware = isDevMode
    ? webpackDevMiddleware(compiler, {
          serverSideRender: true,
          publicPath: webpackConfig.output?.publicPath || "/",
      })
    : (req: Request, res: Response, next: NextFunction) => next();

export const hotMiddleware = isDevMode
    ? webpackHotMiddleware(compiler, {
          log: false,
          path: "/__webpack_hmr",
          heartbeat: 10 * 1000,
      })
    : (req: Request, res: Response, next: NextFunction) => next();

export default webpackConfig;
