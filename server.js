const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
let config = require('./webpack.config.dev');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  contentBase: config.devServer.contentBase,
  stats: {
    hash: false,
    cached: false,
    cachedAssets: false,
    colors: true
  }
}).listen(3000, 'localhost', function (err) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});
