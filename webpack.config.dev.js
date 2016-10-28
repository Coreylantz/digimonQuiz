const path = require('path');
const webpack = require('webpack');

let baseConfig = require('./webpack.config');

const SRC_DIR = path.resolve(__dirname, 'src');
// const DIST_DIR = path.resolve(__dirname, 'dist');

baseConfig.entry.unshift(
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://0.0.0.0:3000',
  'webpack/hot/only-dev-server'
);

baseConfig.module.loaders.push({
  test: /\.scss$/,
  include: SRC_DIR,
  exclude: /(node_modules|bower_components)/,
  loaders: ['style', 'css?-url', 'sass']
});

baseConfig.plugins = [
  new webpack.HotModuleReplacementPlugin()
];

module.exports = baseConfig;
