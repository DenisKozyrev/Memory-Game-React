"use strict";

const Webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");

module.exports = (env, args) => {
  const base = {
    resolve: {
      modules: ["src", "node_modules"]
    },
    output: {
      path: __dirname + "/dist",
      filename: "js/[name]_[hash].js"
    },
    plugins: [
      new CleanWebpackPlugin(["dist"]),
      new HtmlWebpackPlugin({
        title: "match-match-game",
        filename: "index.html",
        template: "./index.html"
      }),
      new MiniCssExtractPlugin({
        filename: "[name]_[hash].css"
      })
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            "css-loader"
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(png|jpg)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "assets/img/[name].[ext]"
              }
            }
          ]
        },
        {
          test: /\.(ttf)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "assets/fonts/[name].[ext]"
              }
            }
          ]
        }
      ]
    }
  };

  const dev = {
    entry: [
      "webpack-dev-server/client?http://localhost:3000",
      "babel-polyfill",
      "./src/index.js"
    ],
    devtool: "source-map",
    devServer: {
      historyApiFallback: true,
      contentBase: "./dist",
      port: 3000,
      open: true,
      inline: true
    }
  };

  const prod = {
    entry: ["./src/index.js"],
    plugins: [new UglifyJSPlugin()]
  };

  let config = {};

  if (args.mode === "development") {
    config = merge(base, dev);
  } else {
    config = merge(base, prod);
  }

  return config;
};
