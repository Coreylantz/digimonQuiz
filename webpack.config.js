const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

let config = {};

config.entry = [
  SRC_DIR + '/js/index.jsx'
];

config.output = {
  path: DIST_DIR + '/js',
  publicPath: '/js/',
  filename: 'bundle.js'
};

config.module = {
  loaders: [
    {
      test: /\.js(x|)$/,
      include: SRC_DIR,
      exclude: /(node_modules|bower_components)/,
      loaders: ['babel']
    }
  ]
};

config.colors = true;
config.progress = true;

module.exports = config;
