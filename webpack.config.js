const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    alias: { components: path.resolve(__dirname, "src/components") },
    extensions: ["", ".ts", ".tsx", ".js", ".json"],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.m?tsx?$/,
        include: /src/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              //url: false,
              esModule: true,
              modules: {
                localIdentName: "[name]__[local]_[hash:base64:8]",
              },
            },
          },
        ],
      },
    ],
  },
  devServer: { static: "./dist", port: 3000 },
};
