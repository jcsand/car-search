import MiniCssExtractPlugin from "mini-css-extract-plugin";

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
          plugins: ["postcss-preset-env"]
        }
      }
    }
  ]
};

// TODO: does this still need to be separate?
export const svgRule = {
  test: /\.svg$/i,
  type: "asset"
};

export const imageRule = {
  test: /\.(png|jpe?g|gif|webp)$/i,
  type: "asset"
};
