const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const svgToMiniDataURI = require("mini-svg-data-uri");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    static: "./docs",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  output: {
    filename: "app.[hash].js",
    path: path.resolve(__dirname, "docs"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.png$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024, // 4kb
          },
        },
      },
      // {
      //   test: /\.html$/,
      //   use: ["html-loader"],
      // },
    ],
  },
};
