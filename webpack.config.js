const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    alias: {
      "@": __dirname,
      "@components": path.join(__dirname, "src/components"),
    },
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
              esModule: true,
              modules: {
                localIdentName: "[name]__[local]_[hash:base64:8]",
                namedExport: true,
              },
            },
          },
        ],
      },
    ],
  },
  devServer: { static: "./dist", port: 3000 },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
