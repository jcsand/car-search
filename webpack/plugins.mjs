import path, { join } from "path";

import ESLintPlugin from "eslint-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import PrettierWebpackPlugin from "prettier-webpack-plugin";
import StylelintWebpackPlugin from "stylelint-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const eslintPlugin = (rootDir) =>
  new ESLintPlugin({
    context: join(rootDir, "src"),
    extensions: ["js", "jsx", "ts", "tsx"]
  });

export const htmlWebpackPlugin = (rootDir) =>
  new HtmlWebpackPlugin({
    filename: "index.html",
    inject: true,
    template: join(rootDir, "src", "index.html")
  });

export const prettierPlugin = () => new PrettierWebpackPlugin();

export const stylelintPlugin = (rootDir) =>
  new StylelintWebpackPlugin({
    configFile: join(rootDir, ".stylelintrc"),
    context: path.resolve(rootDir, "src"),
    files: "**/*.{css,html,tsx}",
    fix: true
  });

export const miniCssExtractPlugin = () =>
  new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css",
    chunkFilename: "[id].[contenthash].css"
  });
