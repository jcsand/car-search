import MiniCssExtractPlugin from "mini-css-extract-plugin";
import * as env from "./environment.mjs";

export const typescriptRule = {
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: ["babel-loader"]
};

export const htmlRule = {
  test: /\.html$/,
  use: ["html-loader"]
};

export const cssRule = {
  test: /\.css$/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: { modules: true }
    },
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: ["postcss-preset-env", ...(env.isProd ? ["cssnano"] : [])]
        }
      }
    }
  ]
};

export const imageRule = {
  test: /\.(svg|png|jpe?g|gif|webp)$/i,
  type: "asset"
};
