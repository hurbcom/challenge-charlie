const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "index.bundle.js",
    path: path.join(__dirname, "/build"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts", ".tsx"],
        },
        use: "babel-loader",
      },
      {
        test: /\.json$/i,
        type: "javascript/auto",
        loader: "lottie-web-webpack-loader",
        include: /(lottie)/,
      },
      {
        test: /\.ico$/i,
        exclude: /node_modules/,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    new Dotenv(),
  ],
};
