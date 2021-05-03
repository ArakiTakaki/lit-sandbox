import path from 'path';

export default [
  {
    name: 'server',
    entry: './src/server.ts',
    mode: 'production',
    target: 'node',
    output: {
      filename: 'server.js',
      path: path.resolve(path.dirname(''), 'build'),
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            'ts-loader',
            'thread-loader',
          ]
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
  },
  {
    name: 'client',
    entry: './src/index.ts',
    mode: 'development',
    target: 'web',
    output: {
      filename: 'dist/index.js',
      path: path.resolve(path.dirname(''), 'build'),
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            'ts-loader',
          ]
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    // devServer: {
    //   contentBase: path.join(path.dirname(''), 'build'),
    //   publicPath: '/',
    //   port: 3031,
    // }
  },
];

