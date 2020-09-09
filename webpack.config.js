const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackMessages = require("webpack-messages");

module.exports = {
    mode: "none",
    entry: {
        app: path.join(__dirname, "src", "index.tsx"),
    },
    target: "web",
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    devtool: "inline-source-map",
    stats: "errors-warnings",
    devServer: {
        stats: "errors-only",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: "/node_modules/",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
        new WebpackMessages({
            name: "client",
            logger: (str) => console.log(`>> ${str}`),
        }),
    ],
};
