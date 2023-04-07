const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
        new MiniCssExtractPlugin(),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "build"),
        },
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(svg|png|jp(e*)g|gif)$/,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)$/,
                type: "asset/resource",
            },
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
        alias: {
            "@public": path.resolve(__dirname, "public"),
            "@components": path.resolve(__dirname, "src/components"),
        },
    },
};
