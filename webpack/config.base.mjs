import { join } from "path";

import * as env from "./environment.mjs";
import * as plugins from "./plugins.mjs";
import * as rules from "./rules.mjs";

export default {
  context: env.rootDir,
  target: ["web", "es5"],
  mode: env.isProd ? "production" : "development",
  entry: {
    main: [join(env.rootDir, "src", "index.tsx")]
  },
  output: {
    clean: {
      keep: /profile.json/
    },
    path: join(env.rootDir, "dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "assets/[hash][ext][query]"
  },
  module: {
    rules: [
      rules.typescriptRule,
      rules.htmlRule,
      rules.cssRule,
      rules.imageRule
    ]
  },
  plugins: [
    plugins.htmlWebpackPlugin(env.rootDir),
    ...(env.isDev ? [plugins.prettierPlugin()] : []),
    plugins.eslintPlugin(env.rootDir),
    plugins.stylelintPlugin(env.rootDir),
    plugins.miniCssExtractPlugin()
  ],
  resolve: {
    alias: {
      "@@src": join(env.rootDir, "src"),
      "@@assets": join(env.rootDir, "src", "assets"),
      "@@icons": join(env.rootDir, "src", "assets", "icons"),
      "@@images": join(env.rootDir, "src", "assets", "images"),
      "@@styles": join(env.rootDir, "src", "assets", "styles"),
      "@@components": join(env.rootDir, "src", "components"),
      "@@hooks": join(env.rootDir, "src", "hooks"),
      "@@lib": join(env.rootDir, "src", "lib")
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
  }
};
