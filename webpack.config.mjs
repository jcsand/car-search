import { join, dirname } from "path";
import { fileURLToPath } from "url";

import * as plugins from "./webpack/plugins.mjs";
import * as rules from "./webpack/rules.mjs";

const rootDir = dirname(fileURLToPath(import.meta.url));

export default {
  context: rootDir,
  target: ["web", "es5"],
  mode: "production",
  entry: {
    main: [join(rootDir, "src", "index.tsx")]
  },
  output: {
    path: join(rootDir, "dist"),
    filename: "[name].[contenthash].js"
  },
  module: {
    rules: [rules.typescriptRule, rules.htmlRule, rules.cssRule, rules.svgRule]
  },
  plugins: [
    plugins.htmlWebpackPlugin(rootDir),
    plugins.prettierPlugin(),
    plugins.eslintPlugin(rootDir),
    plugins.stylelintPlugin(rootDir),
    plugins.miniCssExtractPlugin()
  ],
  resolve: {
    alias: {
      "@assets": join(rootDir, "src", "assets"),
      "@components": join(rootDir, "src", "components")
    },
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  },

  optimization: {
    runtimeChunk: {
      name: "runtime"
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial"
        }
      }
    }
  },

  // TODO: Dev only (inc prettier above)
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    open: true
  },

  performance: {
    hints: false
  }
};
