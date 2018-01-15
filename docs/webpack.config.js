const path = require('path');
const webpack = require('webpack');
const { LoaderOptionsPlugin } = webpack;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = function (env = 'development') {
  const config = {
    context: __dirname,
    devtool: env === 'production' ? 'source-map' : '#inline-source-map',
    entry: [
      './index.js',
    ],
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/build',
      filename: 'bundle.js',
    },
    resolve: {
      alias: {
        reprogressbars: path.join(__dirname, '..', 'src/index.js'),
      },
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
    ]
  };

  if (env === 'production') {
    config.plugins = [
      ...config.plugins,
      new LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true
          },
          output: {
            comments: false
          },
          sourceMap: true,
        }
      }),
      new webpack.HashedModuleIdsPlugin()
    ];
  }

  return config;
};
