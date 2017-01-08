var path = require('path');
var webpack = require('webpack');

module.exports = function (env) {
  var config = {
    entry: './src/index.js',

    output: {
      library: 'Reprogressbars',
      libraryTarget: 'umd',
    },

    module: {
      loaders: [{
        test: /\.(js)$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: 'babel'
      }],
    },

    resolve: {
      alias: {
        react: path.resolve(__dirname, './node_modules/react')
      }
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
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false,
        },
        output: {
          comments: false,
        },
        sourceMap: false,
      })
    );
  }

  return config;
};
