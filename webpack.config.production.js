const path = require("path");
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let baseConfig = require('./webpack.config');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

baseConfig.module.loaders.push({
  test: /\.scss$/,
  include: SRC_DIR,
  exclude: /(node_modules|bower_components)/,
  loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
});

baseConfig.plugins = [
  new ExtractTextPlugin("../css/style.css"),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
];

baseConfig.devtool = 'cheap-source-map';

module.exports = baseConfig;
