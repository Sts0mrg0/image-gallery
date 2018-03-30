const webpack = require('webpack');

let PLUGINS = [];
if (process.env.NODE_ENV === 'production') {
  PLUGINS.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'image-gallery.bundle.js'
  },
  plugins: PLUGINS,
  devServer: {
    disableHostCheck: true
  }
};