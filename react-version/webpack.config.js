const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const rootPath = path.resolve(__dirname, '.');

module.exports = {
  context: path.resolve(rootPath),
  entry: {
    client: './app/index.jsx',
    vendor: [
      'react',
      'react-dom'
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        },
      }
    },
    runtimeChunk: true
  },
  output: {
    filename: 'index.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(rootPath, 'app')
        ],
        exclude: [
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(rootPath, 'assets'),
          path.resolve(rootPath, 'node_modules')
        ],
        exclude: [
        ],
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        include: [
          path.resolve(rootPath, 'app'),
          path.resolve(rootPath, 'assets')
        ],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|gif|png)$/i,
        include: [
          path.resolve(rootPath, 'assets/img'),
          path.resolve(rootPath, 'node_modules')
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'img'
            }
          },
        ],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/,
        include: [
          path.resolve(rootPath, 'assets/fonts'),
          path.resolve(rootPath, 'node_modules')
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts'
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: "index.css"
    })
  ]
}
