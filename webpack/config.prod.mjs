import TerserWebpackPlugin from "terser-webpack-plugin";

export default {
  optimization: {
    minimize: true,
    minimizer: [new TerserWebpackPlugin({})]
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};
