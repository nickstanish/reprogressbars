const path = require('path');
const webpack = require('webpack');

module.exports = function buildWebpackConfig(env) {
  const filename = (env !== 'development') ? 'Reprogressbars.min.js' : 'Reprogressbars.js';

  const config = {
    entry: './src/index.js',

    output: {
      filename,
      path: path.resolve(__dirname, 'umd'),
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

  return config;
};
