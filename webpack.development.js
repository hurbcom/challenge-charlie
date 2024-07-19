const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    client: {
      logging: "info",
      overlay: true,
    },
    compress: true,
    open: true,
    static: "./build",
    port: 8080,
    host: "0.0.0.0",
  },
  stats: {
    errorDetails: true,
  },
});
