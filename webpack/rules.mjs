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
    "style-loader",
    "css-loader",
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
