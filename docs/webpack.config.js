const path = require('path');
const webpack = require('webpack');

module.exports = function buildWebpackConfig(env = 'development') {
  const config = {
    context: __dirname,
    devtool: env === 'production' ? 'source-map' : '#inline-source-map',
    entry: [
      './index.js'
    ],
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/build',
      filename: 'bundle.js'
    },
    resolve: {
      alias: {
        reprogressbars: path.join(__dirname, '..', 'src/index.js'),
      }
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        include: [
          __dirname,
          path.resolve(__dirname, '..', 'src'),
        ],
        loader: 'babel-loader'
      }],
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env),
      })
    ],
    devServer: {
      contentBase: path.resolve(__dirname),
      port: process.env.PORT || '3000'
    }
  };

  return config;
};
