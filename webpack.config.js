const path = require('path');
const webpack = require('webpack');
const { LoaderOptionsPlugin } = webpack;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = function (env) {
  const config = {
    entry: './src/index.js',

    output: {
      library: 'Reprogressbars',
      libraryTarget: 'umd',
    },

    module: {
      rules: [{
        test: /\.(js)$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: 'babel-loader'
      }],
    },

    externals: {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      }
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
          sourceMap: false,
        }
      }),
      new webpack.HashedModuleIdsPlugin()
    ];
  }

  return config;
};
