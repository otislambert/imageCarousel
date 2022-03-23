const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: "file-loader",
        options: {
          name: "/photos/[name].[ext]",
        },
      },
    ],
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: "./dist",
    port: 8000,
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "image carousel",
      filename: "index.html",
    }),
  ],
};
