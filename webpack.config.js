const path = require("path");
const rules = [
  {
    test: /\.tsx$/,
    exclude: /node_modules/,
    loader: "babel-loader",
  },
  {
    // test: /\.css$/,
    // use: ['style-loader', 'css-loader']

    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"],
  },
];

module.exports = {
  target: "web",
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: { rules },
  resolve: { extensions: [".ts", ".tsx", ".js"] },
  devServer: {
    contentBase: "./",
    historyApiFallback: true,
    port: 5000,
  },
};
