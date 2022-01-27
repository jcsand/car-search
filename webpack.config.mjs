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
    clean: {
      keep: /profile.json/
    },
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
    // plugins.stylelintPlugin(rootDir), // TODO: figure out why this is crashing
    plugins.miniCssExtractPlugin()
  ],
  resolve: {
    alias: {
      "@@src": join(rootDir, "src"),
      "@@assets": join(rootDir, "src", "assets"),
      "@@icons": join(rootDir, "src", "assets", "icons"),
      "@@styles": join(rootDir, "src", "assets", "styles"),
      "@@components": join(rootDir, "src", "components"),
      "@@hooks": join(rootDir, "src", "hooks"),
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
