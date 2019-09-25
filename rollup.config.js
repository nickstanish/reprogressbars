import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    output: [
      {
        name: pkg.libraryName,
        file: pkg.main,
        format: 'umd',
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM'
        }
      },
      {
        file: pkg.module,
        format: 'esm'
      }
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx']
      }),
      external(),
      resolve({
        extensions: ['.js', '.jsx']
      }),
      commonjs({
        namedExports: {
          'node_modules/shifty/dist/shifty.js': ['Tweenable']
        }
      }),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') })
    ]
  }
];