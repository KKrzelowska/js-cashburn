const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  devtool: "eval-source-map",
  output: {
    path: path.join(__dirname, "/bundle"),
    filename: "index_bundle.js",
  },
  devServer: {
    inline: true,
    port: 1337,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};