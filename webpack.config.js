const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
	 publicPath: '',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
	sourceMapFilename: "[name].js.map"
  },
   devtool: "nosources-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 5000,
  },
  module: {
    rules: [
       {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [].concat(devMode ? [] : [new MiniCssExtractPlugin()]),
};
