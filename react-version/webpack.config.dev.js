const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config');

module.exports = webpackMerge(baseConfig, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname,'build')
  },
  devServer: {
    compress: true,
    contentBase: path.resolve(__dirname,'build'),
    historyApiFallback: true,
    port: 3000
  }
});
