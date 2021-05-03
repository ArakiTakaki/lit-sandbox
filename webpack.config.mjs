import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
// import webpack from 'webpack';

export default {
  entry: './src/test.ts',
  // mode: 'development',
  mode: 'production',
  target: 'node',
  devtool: false,
  output: {
    filename: 'dist/index.js',
    path: path.resolve(path.dirname(''), 'build'),
    publicPath: path.resolve(path.dirname(''), 'public'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        // exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: '' },
      ],
    }),
  ],
  devServer: {
    contentBase: path.join(path.dirname(''), 'build'),
    publicPath: '/',
    port: 3031,
  }
};

