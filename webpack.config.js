const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: ["./src/index.tsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".scss", ".jpg"],
    modules: ["src", "node_modules"],
  },
  devServer: {
    static: "./dist",
    port: 8000,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: "/node_modules",
        loader: "babel-loader",
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
};
