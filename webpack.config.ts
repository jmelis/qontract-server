import * as webpack from 'webpack';
import * as path from 'path';
import * as nodeExternals from 'webpack-node-externals';

let config: webpack.Configuration = {
  entry: [
    './server.ts',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-bundle.js',
    chunkFilename: '[name]-[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /(\.js|\.ts)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              //happyPackMode: true, // This implicitly enables transpileOnly! No type checking!
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  target: 'node',
  externals: [nodeExternals()],
};

export default config;
