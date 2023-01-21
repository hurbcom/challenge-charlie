const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (env) => ({
    entry: "./src/index.tsx",
    output: {
        filename: "./dist/bundle.js",
    },
    devtool: "inline-source-map",
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    },
    performance: {
        hints: process.env.NODE_ENV === "production" ? "warning" : false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
        }),
        new Dotenv({
            path: `.env.${process.env.ENVIROMENT}`,
        }),
    ],
    devServer: {
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },

            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
        ],
    },
});
