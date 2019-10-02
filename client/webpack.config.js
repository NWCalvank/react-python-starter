const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = [
  {
    name: 'dev',
    entry: './src/index.js',
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    output: {
      path: __dirname + '/dist',
      publicPath: './',
      filename: 'bundle.js',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Basic React App',
        template: './src/index.html',
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
      contentBase: './dist',
      hot: true,
      historyApiFallback: true,
      writeToDisk: true,
    },
  },
  {
    name: 'prod',
    entry: './src/index.js',
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    output: {
      path: __dirname + '/dist',
      publicPath: './',
      filename: 'bundle.js',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        // TODO: Add cache-buster (if needed)
        title: 'Basic React App',
        template: './src/index.html',
      }),
    ],
  },
];