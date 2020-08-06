const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config');

const rootPath = path.resolve(__dirname, '.');

module.exports = webpackMerge(baseConfig, {
  mode: 'production',
  output: {
    path: path.resolve(rootPath, 'dist')
  }
});
